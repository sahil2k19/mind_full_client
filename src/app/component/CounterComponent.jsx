"use client"

import React, { useState, useEffect, useRef } from 'react'

export default function CounterComponent() {
  const counters = [
    { label: 'Years of Experience', targetNumber: 5, suffix: '+', duration: 2000 },
    { label: 'Clinics (India & USA)', targetNumber: 10, suffix: '+', duration: 2000 },
    { label: 'Treatments Administered', targetNumber: 400000, suffix: '+', duration: 4000 },
  ]

  const [counts, setCounts] = useState(counters.map(() => 0))
  const animationInProgress = useRef(false)
  const componentRef = useRef(null)

  const startCountAnimation = () => {
    if (animationInProgress.current) return

    animationInProgress.current = true
    setCounts(counters.map(() => 0)) // Reset all counts to 0

    const startTime = Date.now()

    const animate = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / counters[0].duration, 1)

      setCounts(
        counters.map((counter) =>
          Math.round(progress * counter.targetNumber)
        )
      )

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        animationInProgress.current = false
      }
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCountAnimation()
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    )

    if (componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [])

  return (
    <div ref={componentRef} className="">
      <div className="text-center">

        {/* Loop through each counter and display them */}
        {counters.map((counter, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg font-semibold">{counter.label}</p>
            <div className="text-2xl font-bold tabular-nums text-orange-600" aria-live="polite">
              {counts[index].toLocaleString()}
              {counter.suffix && counter.suffix}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}