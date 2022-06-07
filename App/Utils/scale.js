import { Dimensions } from "react-native"
import { initialWindowMetrics } from "react-native-safe-area-context"

const { width, height } = Dimensions.get("window")
const deviceHeight = height - (initialWindowMetrics?.insets.top ?? 0)

export const WIDTH = (w: number): number => width * (w / 360)
export const HEIGHT = (h: number): number => height * (h / 640)
export const getWidth = (): number => width
export const getHeight = (): number => height
export const getFont = (f: number): number => {
    return RFValue(f)
}

function RFValue(fontSize: number) {
    const heightPercent =
      (((initialWindowMetrics?.insets.top ?? 0) > 20 ? fontSize : fontSize - 1) *
        (deviceHeight ?? 0)) /
      getHeight()
    return Math.round(heightPercent)
  }