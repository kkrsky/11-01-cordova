let callback = 'callback'
let successCallback = 'successCallback'
let errorCallback = 'errorCallback'
let permission = 'permission'
let permissions = 'permissions'
let cold = 'cold'
let state = 'state'
let params = 'params'

function func(elm1, elm2, elm3) {
  console.log('elm1', elm1)
  console.log('elm2', elm2)
  console.log('elm3', elm3)
}

let idWrapper = 'success'
let passItemWrapper = true
let diagnostic = {
  //version1.0
  permission: {
    READ_CALENDAR: 'READ_CALENDAR',
    WRITE_CALENDAR: 'WRITE_CALENDAR',
    CAMERA: 'CAMERA',
    READ_CONTACTS: 'READ_CONTACTS',
    WRITE_CONTACTS: 'WRITE_CONTACTS',
    GET_ACCOUNTS: 'GET_ACCOUNTS',
    ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
    ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
    RECORD_AUDIO: 'RECORD_AUDIO',
    READ_PHONE_STATE: 'READ_PHONE_STATE',
    CALL_PHONE: 'CALL_PHONE',
    ADD_VOICEMAIL: 'ADD_VOICEMAIL',
    USE_SIP: 'USE_SIP',
    PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
    READ_CALL_LOG: 'READ_CALL_LOG',
    WRITE_CALL_LOG: 'WRITE_CALL_LOG',
    SEND_SMS: 'SEND_SMS',
    RECEIVE_SMS: 'RECEIVE_SMS',
    READ_SMS: 'READ_SMS',
    RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
    RECEIVE_MMS: 'RECEIVE_MMS',
    WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
    READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
    BODY_SENSORS: 'BODY_SENSORS',
  },
  runtimePermission: {
    READ_CALENDAR: 'READ_CALENDAR',
    WRITE_CALENDAR: 'WRITE_CALENDAR',
    CAMERA: 'CAMERA',
    READ_CONTACTS: 'READ_CONTACTS',
    WRITE_CONTACTS: 'WRITE_CONTACTS',
    GET_ACCOUNTS: 'GET_ACCOUNTS',
    ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
    ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
    RECORD_AUDIO: 'RECORD_AUDIO',
    READ_PHONE_STATE: 'READ_PHONE_STATE',
    CALL_PHONE: 'CALL_PHONE',
    ADD_VOICEMAIL: 'ADD_VOICEMAIL',
    USE_SIP: 'USE_SIP',
    PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
    READ_CALL_LOG: 'READ_CALL_LOG',
    WRITE_CALL_LOG: 'WRITE_CALL_LOG',
    SEND_SMS: 'SEND_SMS',
    RECEIVE_SMS: 'RECEIVE_SMS',
    READ_SMS: 'READ_SMS',
    RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
    RECEIVE_MMS: 'RECEIVE_MMS',
    WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
    READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
    BODY_SENSORS: 'BODY_SENSORS',
  },
  permissionGroups: {
    CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
    CAMERA: ['CAMERA'],
    CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
    LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
    MICROPHONE: ['RECORD_AUDIO'],
    PHONE: [
      'READ_PHONE_STATE',
      'CALL_PHONE',
      'ADD_VOICEMAIL',
      'USE_SIP',
      'PROCESS_OUTGOING_CALLS',
      'READ_CALL_LOG',
      'WRITE_CALL_LOG',
    ],
    SENSORS: ['BODY_SENSORS'],
    SMS: [
      'SEND_SMS',
      'RECEIVE_SMS',
      'READ_SMS',
      'RECEIVE_WAP_PUSH',
      'RECEIVE_MMS',
    ],
    STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'],
  },
  runtimePermissionGroups: {
    CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
    CAMERA: ['CAMERA'],
    CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
    LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
    MICROPHONE: ['RECORD_AUDIO'],
    PHONE: [
      'READ_PHONE_STATE',
      'CALL_PHONE',
      'ADD_VOICEMAIL',
      'USE_SIP',
      'PROCESS_OUTGOING_CALLS',
      'READ_CALL_LOG',
      'WRITE_CALL_LOG',
    ],
    SENSORS: ['BODY_SENSORS'],
    SMS: [
      'SEND_SMS',
      'RECEIVE_SMS',
      'READ_SMS',
      'RECEIVE_WAP_PUSH',
      'RECEIVE_MMS',
    ],
    STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'],
  },
  permissionStatus: {
    GRANTED: 'GRANTED',
    DENIED_ONCE: 'DENIED_ONCE',
    NOT_REQUESTED: 'NOT_REQUESTED',
    DENIED_ALWAYS: 'DENIED_ALWAYS',
    runtimePermissionStatus: {
      GRANTED: 'GRANTED',
      DENIED_ONCE: 'DENIED_ONCE',
      NOT_REQUESTED: 'NOT_REQUESTED',
      DENIED_ALWAYS: 'DENIED_ALWAYS',
    },
  },
  cpuArchitecture: {
    UNKNOWN: 'unknown',
    ARMv6: 'ARMv6',
    ARMv7: 'ARMv7',
    ARMv8: 'ARMv8',
    X86: 'X86',
    X86_64: 'X86_64',
    MIPS: 'MIPS',
    MIPS_64: 'MIPS_64',
  },

  _onPermissionRequestComplete: function() {},
  _onNFCStateChange: function() {
    console.log(c.cyan + '[diag start]')
  },

  _ensureBoolean: function(callback) {
    console.log(c.cyan + '[diag start]')
  },

  enableDebug: function(successCallback) {
    console.log(c.cyan + '[diag start]')
  },

  switchToSettings: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getPermissionAuthorizationStatus: function(
    successCallback,
    errorCallback,
    permission
  ) {
    console.log(c.cyan + '[diag start]')
  },

  getPermissionsAuthorizationStatus: function(
    successCallback,
    errorCallback,
    permissions
  ) {
    console.log(c.cyan + '[diag start]')
  },

  requestRuntimePermission: function(
    successCallback,
    errorCallback,
    permission
  ) {
    console.log(c.cyan + '[diag start]')
  },

  requestRuntimePermissions: function(
    successCallback,
    errorCallback,
    permissions
  ) {
    console.log(c.cyan + '[diag start]')
  },

  isRequestingPermission: function() {
    console.log(c.cyan + '[diag start]')
  },

  registerPermissionRequestCompleteHandler: function(successCallback) {
    console.log(c.cyan + '[diag start]')
  },

  switchToWirelessSettings: function() {
    console.log(c.cyan + '[diag start]')
  },

  switchToMobileDataSettings: function() {
    console.log(c.cyan + '[diag start]')
  },

  isADBModeEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isDeviceRooted: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  restart: function(errorCallback, cold) {
    console.log(c.cyan + '[diag start]')
  },

  getArchitecture: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isDataRoamingEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isLocationAvailable: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isLocationEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isGpsLocationAvailable: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isGpsLocationEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isNetworkLocationAvailable: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isNetworkLocationEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getLocationMode: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'high_accuracy' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  switchToLocationSettings: function() {
    console.log(c.cyan + '[diag start]')
  },

  requestLocationAuthorization: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getLocationAuthorizationStatus: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'NOT_REQUESTED' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isLocationAuthorized: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  registerLocationStateChangeHandler: function(successCallback) {
    console.log(c.cyan + '[diag start]')
  },

  isWifiEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isWifiAvailable: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  switchToWifiSettings: function() {
    console.log(c.cyan + '[diag start]')
  },

  setWifiState: function(successCallback, errorCallback, state) {
    console.log(c.cyan + '[diag start]')
  },

  isCameraAvailable: function(params) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper
      ? params.successCallback(passItem)
      : params.errorCallback(passItem)
  },

  isCameraPresent: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  requestCameraAuthorization: function(params) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper
      ? params.successCallback(passItem)
      : params.errorCallback(passItem)
  },

  getCameraAuthorizationStatus: function(params) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper
      ? params.successCallback(passItem)
      : params.errorCallback(passItem)
  },
  getCameraRollAuthorizationStatus: function(params) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper
      ? params.successCallback(passItem)
      : params.errorCallback(passItem)
  },
  isCameraAuthorized: function(params) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper
      ? params.successCallback(passItem)
      : params.errorCallback(passItem)
  },

  requestExternalStorageAuthorization: function(
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[diag start]')
  },

  getExternalStorageAuthorizationStatus: function(
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isExternalStorageAuthorized: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getExternalSdCardDetails: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isBluetoothAvailable: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isBluetoothEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  setBluetoothState: function(successCallback, errorCallback, state) {
    console.log(c.cyan + '[diag start]')
  },

  getBluetoothState: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  registerBluetoothStateChangeHandler: function(successCallback) {
    console.log(c.cyan + '[diag start]')
  },

  hasBluetoothSupport: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  hasBluetoothLESupport: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  hasBluetoothLEPeripheralSupport: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  switchToBluetoothSettings: function() {
    console.log(c.cyan + '[diag start]')
  },

  isRemoteNotificationsEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isMicrophoneAuthorized: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getMicrophoneAuthorizationStatus: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  requestMicrophoneAuthorization: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isContactsAuthorized: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getContactsAuthorizationStatus: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  requestContactsAuthorization: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isCalendarAuthorized: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getCalendarAuthorizationStatus: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' // passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  requestCalendarAuthorization: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  ///↓追加↓///
  getRemindersAuthorizationStatus: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getBackgroundRefreshStatus: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },
  getRemoteNotificationsAuthorizationStatus: function(
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  getExternalStorageAuthorizationStatus: function(
    successCallback,
    errorCallback
  ) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = 'TO_UPPER_CASE' //passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  ///↑追加↑///
  isNFCPresent: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isNFCEnabled: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  isNFCAvailable: function(successCallback, errorCallback) {
    console.log(c.cyan + '[diag start]', '')
    //////////////////////////
    let id = idWrapper
    let passItem = passItemWrapper
    //////////////////////////
    id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
  },

  registerNFCStateChangeHandler: function(successCallback) {
    console.log(c.cyan + '[diag start]')
  },

  switchToNFCSettings: function() {
    console.log(c.cyan + '[diag start]')
  },

  locationMode: {
    HIGH_ACCURACY: 'high_accuracy',
    DEVICE_ONLY: 'device_only',
    BATTERY_SAVING: 'battery_saving',
    LOCATION_OFF: 'location_off',
  },
  locationAuthorizationMode: {},
  location: {
    locationMode: {
      HIGH_ACCURACY: 'high_accuracy',
      DEVICE_ONLY: 'device_only',
      BATTERY_SAVING: 'battery_saving',
      LOCATION_OFF: 'location_off',
    },
    locationAuthorizationMode: {},
    _onLocationStateChange: function() {
      console.log(c.cyan + '[diag start]')
    },

    isLocationAvailable: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isLocationEnabled: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isGpsLocationAvailable: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isGpsLocationEnabled: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isNetworkLocationAvailable: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isNetworkLocationEnabled: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    getLocationMode: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = 'high_accuracy' //passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    switchToLocationSettings: function() {
      console.log(c.cyan + '[diag start]')
    },

    requestLocationAuthorization: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    getLocationAuthorizationStatus: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isLocationAuthorized: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    registerLocationStateChangeHandler: function(successCallback) {
      console.log(c.cyan + '[diag start]')
    },
  },
  bluetoothState: {
    UNKNOWN: 'unknown',
    POWERED_OFF: 'powered_off',
    POWERED_ON: 'powered_on',
    POWERING_OFF: 'powering_off',
    POWERING_ON: 'powering_on',
  },
  bluetooth: {
    bluetoothState: {
      UNKNOWN: 'unknown',
      POWERED_OFF: 'powered_off',
      POWERED_ON: 'powered_on',
      POWERING_OFF: 'powering_off',
      POWERING_ON: 'powering_on',
    },
    _onBluetoothStateChange: function() {
      console.log(c.cyan + '[diag start]')
    },

    isBluetoothAvailable: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isBluetoothEnabled: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    setBluetoothState: function(successCallback, errorCallback, state) {
      console.log(c.cyan + '[diag start]')
    },

    getBluetoothState: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = 'TO_UPPER_CASE' //passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    registerBluetoothStateChangeHandler: function(successCallback) {
      console.log(c.cyan + '[diag start]')
    },

    hasBluetoothSupport: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    hasBluetoothLESupport: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    hasBluetoothLEPeripheralSupport: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    switchToBluetoothSettings: function() {
      console.log(c.cyan + '[diag start]')
    },
  },
  wifi: {
    isWifiEnabled: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isWifiAvailable: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    switchToWifiSettings: function() {
      console.log(c.cyan + '[diag start]')
    },

    setWifiState: function(successCallback, errorCallback, state) {
      console.log(c.cyan + '[diag start]')
    },
  },
  camera: {
    isCameraAvailable: function(params) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper
        ? params.successCallback(passItem)
        : params.errorCallback(passItem)
    },

    isCameraPresent: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    requestCameraAuthorization: function(params) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper
        ? params.successCallback(passItem)
        : params.errorCallback(passItem)
    },

    getCameraAuthorizationStatus: function(params) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = 'TO_UPPER_CASE' //passItemWrapper
      //////////////////////////
      id === idWrapper
        ? params.successCallback(passItem)
        : params.errorCallback(passItem)
    },

    isCameraAuthorized: function(params) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper
        ? params.successCallback(passItem)
        : params.errorCallback(passItem)
    },
  },
  notifications: {
    isRemoteNotificationsEnabled: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },
  },
  microphone: {
    isMicrophoneAuthorized: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    getMicrophoneAuthorizationStatus: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = 'TO_UPPER_CASE' // passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    requestMicrophoneAuthorization: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },
  },
  contacts: {
    isContactsAuthorized: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    getContactsAuthorizationStatus: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = 'TO_UPPER_CASE' // passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    requestContactsAuthorization: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },
  },
  calendar: {
    isCalendarAuthorized: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    getCalendarAuthorizationStatus: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = 'TO_UPPER_CASE' //passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    requestCalendarAuthorization: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },
  },
  NFCState: {
    UNKNOWN: 'unknown',
    POWERED_OFF: 'powered_off',
    POWERING_ON: 'powering_on',
    POWERED_ON: 'powered_on',
    POWERING_OFF: 'powering_off',
  },
  nfc: {
    NFCState: {
      UNKNOWN: 'unknown',
      POWERED_OFF: 'powered_off',
      POWERING_ON: 'powering_on',
      POWERED_ON: 'powered_on',
      POWERING_OFF: 'powering_off',
    },
    _onNFCStateChange: function() {
      console.log(c.cyan + '[diag start]')
    },

    isNFCPresent: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isNFCEnabled: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isNFCAvailable: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    registerNFCStateChangeHandler: function(successCallback) {
      console.log(c.cyan + '[diag start]')
    },

    switchToNFCSettings: function() {
      console.log(c.cyan + '[diag start]')
    },
  },
  external_storage: {
    requestExternalStorageAuthorization: function(
      successCallback,
      errorCallback
    ) {
      console.log(c.cyan + '[diag start]')
    },

    getExternalStorageAuthorizationStatus: function(
      successCallback,
      errorCallback
    ) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = 'TO_UPPER_CASE' //passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    isExternalStorageAuthorized: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },

    getExternalSdCardDetails: function(successCallback, errorCallback) {
      console.log(c.cyan + '[diag start]', '')
      //////////////////////////
      let id = idWrapper
      let passItem = passItemWrapper
      //////////////////////////
      id === idWrapper ? successCallback(passItem) : errorCallback(passItem)
    },
  },
}
