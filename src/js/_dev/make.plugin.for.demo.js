services
success
failure
device_id
service_uuid
characteristic_uuid

this.elm1, this.eml2

let ble = {
  idWrapper: 'success',
  passItemWrapper: 'pass',
  elm1: 'elm1',
  elm2: 'elm2',
  elm3: 'elm3',
  elm4: 'elm4',
  elm5: 'elm5',
  scan: function (elm1, elm2, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'scan')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  startScan: function (elm1, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'startScan')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  stopScan: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'stopScan')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  startScanWithOptions: function (elm1, elm2, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'startScanWithOptions')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  connectedPeripheralsWithServices: function (
    elm1,
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[ble start]', 'connectedPeripheralsWithServices')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  peripheralsWithIdentifiers: function (elm1, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'peripheralsWithIdentifiers')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  bondedDevices: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'bondedDevices')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  list: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'list')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  connect: function (elm1, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'connect')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  autoConnect: function (elm1, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'autoConnect')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  disconnect: function (elm1, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'disconnect')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  queueCleanup: function (elm1, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'queueCleanup')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  requestMtu: function (elm1, elm2, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'requestMtu')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  refreshDeviceCache: function (elm1, elm2, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'refreshDeviceCache')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  read: function (elm1, elm2, elm3, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'read')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  readRSSI: function (elm1, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'readRSSI')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  write: function (elm1, elm2, elm3, eml4, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'write')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  writeWithoutResponse: function (
    elm1,
    elm2,
    elm3,
    eml4,
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[ble start]', 'writeWithoutResponse')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  writeCommand: function (
    elm1,
    elm2,
    elm3,
    eml4,
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[ble start]', 'writeCommand')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  notify: function (elm1, elm2, elm3, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'notify')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  startNotification: function (
    elm1,
    elm2,
    elm3,
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[ble start]', 'startNotification')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  stopNotification: function (
    elm1,
    elm2,
    elm3,
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[ble start]', 'stopNotification')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  isConnected: function (elm1, successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'isConnected')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  isEnabled: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'isEnabled')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  isLocationEnabled: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'isLocationEnabled')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  enable: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'enable')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  showBluetoothSettings: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'showBluetoothSettings')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  startStateNotifications: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'startStateNotifications')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  stopStateNotifications: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'stopStateNotifications')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
  withPromises: function (successCallback, errorCallback) {
    console.log(c.cyan + '[ble start]', 'withPromises')
    //////////////////////////
    let id = this.idWrapper
    let passItem = this.passItemWrapper
    //////////////////////////
    id === 'success' ? successCallback(passItem) : errorCallback(passItem)
  },
}
