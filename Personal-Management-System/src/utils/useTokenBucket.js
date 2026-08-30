import { ref, computed, onUnmounted } from 'vue'

/**
 * useTokenBucket — Token Bucket Rate Limiter composable
 *
 * @param {number} capacity     Max tokens the bucket can hold (default: 10)
 * @param {number} refillRateMs Milliseconds between each +1 token refill (default: 6000 → 10 req/min)
 * @returns {{ bucketTokens, refillCountdown, isRateLimited, consumeToken, BUCKET_CAPACITY }}
 */
export function useTokenBucket(capacity = 10, refillRateMs = 6000) {
  const BUCKET_CAPACITY = capacity

  const bucketTokens    = ref(BUCKET_CAPACITY)
  const refillCountdown = ref(0)   // seconds until next token (for UI)
  let   lastRefillTime  = Date.now()
  let   refillTimer     = null

  function startRefillTimer() {
    if (refillTimer) return
    refillTimer = setInterval(() => {
      const now          = Date.now()
      const elapsed      = now - lastRefillTime
      const tokensToAdd  = Math.floor(elapsed / refillRateMs)

      if (tokensToAdd > 0) {
        bucketTokens.value = Math.min(BUCKET_CAPACITY, bucketTokens.value + tokensToAdd)
        lastRefillTime     = now - (elapsed % refillRateMs)
      }

      // Countdown until next refill (shown in UI when bucket is depleted)
      const msUntilNext     = refillRateMs - ((now - lastRefillTime) % refillRateMs)
      refillCountdown.value = Math.ceil(msUntilNext / 1000)

      // Stop ticking once bucket is full
      if (bucketTokens.value >= BUCKET_CAPACITY) {
        clearInterval(refillTimer)
        refillTimer = null
        refillCountdown.value = 0
      }
    }, 500)
  }

  const isRateLimited = computed(() => bucketTokens.value <= 0)

  /** Consumes one token. Returns true if allowed, false if rate-limited. */
  function consumeToken() {
    if (bucketTokens.value <= 0) return false
    bucketTokens.value--
    startRefillTimer()
    return true
  }

  onUnmounted(() => {
    if (refillTimer) clearInterval(refillTimer)
  })

  return {
    BUCKET_CAPACITY,
    bucketTokens,
    refillCountdown,
    isRateLimited,
    consumeToken,
  }
}
