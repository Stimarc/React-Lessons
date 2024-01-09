import { MiddleLevel } from ".";

export const TopLevel = () => {
  return (
    <div className="top">
      <h2>Top level</h2>
      <MiddleLevel />
    </div>
  )
}