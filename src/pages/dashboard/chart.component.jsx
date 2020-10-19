import React, { useContext } from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean'
import { AuthContext } from '../../contexts/AuthContext'

ReactFC.fcRoot(FusionCharts, Column2D, OceanTheme)

const Chart = () => {
  const { chartData } = useContext(AuthContext)

  // const chartData = [
  //   { label: 'Sunday', value: '20' },
  //   { label: 'Monday', value: '60' },
  //   { label: 'Tuesday', value: '100' },
  //   { label: 'Wednesday', value: '80' },
  //   { label: 'Thursday', value: '35' },
  //   { label: 'Friday', value: '15' },
  //   { label: 'Saturday', value: '85' }
  // ]

  const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Exercise data across the various days',
        subCaption: 'In km = Kilometre',
        xAxisName: 'Day',
        yAxisName: 'Distance (Km)',
        numberSuffix: 'km',
        theme: 'ocean'
      },
      data: chartData
    }
  }
  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  )
}

export default Chart
