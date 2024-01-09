import { BottomLevel } from "."

export const MiddleLevel = () => {
  return (
    <div className="middle">
      <h2>Middle level</h2>
      <BottomLevel />
    </div>
  )
}