export interface Order {
  price: number
  size: number
}
export interface ServerRespond {
  stock: string
  top_bid: Order
  top_ask: Order
  timestamp: Date
  price_def: number
  price_abc: number
  trigger_alert: number
  upper_bound: number
  lower_bound: number
}

class DataStreamer {
  static API_URL: string = "http://localhost:8080/query?id=1"

  static getData(callback: (data: ServerRespond[]) => void): void {
    const request = new XMLHttpRequest()
    request.open("GET", DataStreamer.API_URL, false)

    request.onload = () => {
      if (request.status === 200) {
        callback(JSON.parse(request.responseText))
      } else {
        alert("Request failed")
      }
    }

    request.send()
  }
}

export default DataStreamer
