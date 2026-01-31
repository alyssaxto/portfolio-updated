"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Star animation
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.2
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

const BASE_W = 800
const BASE_H = 600
const SAFE_ZONE_LEFT = 250
const SAFE_ZONE_RIGHT = BASE_W - SAFE_ZONE_LEFT

// Vertical positions for stars
const baseYs = [80, 120, 160]

// Horizontal offsets per star
const offsets = [0, 35, 0]

// Colors for left/right sides
const leftColors = ["#82EEEC", "#FD9CA7", "#F7BB3B"]
const rightColors = ["#F7BB3B", "#FD9CA7", "#82EEEC"]

export default function HeroStars() {
  const [scaleFactor, setScaleFactor] = useState(1)
  const [show, setShow] = useState(true)
  const [width, setWidth] = useState(1464)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setWidth(w)
      setScaleFactor(Math.max(w / 1464, 0.85))
      setShow(w > 1320)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  if (!show) return null

  const getStarPosition = (y, offsetX = 0, side = "left") => {
    // Slightly lower on bigger screens
    let newY = y + (scaleFactor - 1) * BASE_H * 0.05
    newY = Math.max(50, Math.min(BASE_H - 50, newY))

    // Dynamic horizontal push: increases if screen width >= 1300
    const extraPushFactor = width >= 1300 ? 1.25 : 1
    const horizontalPush = offsetX * scaleFactor * extraPushFactor

    const newX =
      side === "left"
        ? SAFE_ZONE_LEFT - horizontalPush
        : SAFE_ZONE_RIGHT + horizontalPush

    return { x: newX, y: newY }
  }

  const drawStar = (x, y) => `
    M ${x} ${y - 16}
    L ${x + 6} ${y}
    L ${x + 16} ${y + 6}
    L ${x + 6} ${y + 12}
    L ${x} ${y + 24}
    L ${x - 6} ${y + 12}
    L ${x - 16} ${y + 6}
    L ${x - 6} ${y}
    Z
  `

  return (
    <motion.svg
      viewBox={`0 0 ${BASE_W} ${BASE_H}`}
      width="100%"
      height="100%"
      initial="hidden"
      animate="visible"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Left column */}
      {baseYs.map((y, idx) => {
        const p = getStarPosition(y, offsets[idx], "left")
        return (
          <motion.path
            key={`left-${idx}`}
            d={drawStar(p.x, p.y)}
            stroke={leftColors[idx % leftColors.length]}
            variants={draw}
            custom={idx + 1}
            style={{
              strokeWidth: 3.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "transparent",
            }}
          />
        )
      })}

      {/* Right column */}
      {baseYs.map((y, idx) => {
        const p = getStarPosition(y, offsets[idx], "right")
        return (
          <motion.path
            key={`right-${idx}`}
            d={drawStar(p.x, p.y)}
            stroke={rightColors[idx % rightColors.length]}
            variants={draw}
            custom={idx + 1}
            style={{
              strokeWidth: 3.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "transparent",
            }}
          />
        )
      })}
    </motion.svg>
  )
}
