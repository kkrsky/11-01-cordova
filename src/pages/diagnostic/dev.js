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

let diagnostic = {
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
  _onNFCStateChange: function() {},

  _ensureBoolean: function(callback) {},

  enableDebug: function(successCallback) {},

  switchToSettings: function(successCallback, errorCallback) {},

  getPermissionAuthorizationStatus: function(
    successCallback,
    errorCallback,
    permission
  ) {},

  getPermissionsAuthorizationStatus: function(
    successCallback,
    errorCallback,
    permissions
  ) {},

  requestRuntimePermission: function(
    successCallback,
    errorCallback,
    permission
  ) {},

  requestRuntimePermissions: function(
    successCallback,
    errorCallback,
    permissions
  ) {},

  isRequestingPermission: function() {},

  registerPermissionRequestCompleteHandler: function(successCallback) {},

  switchToWirelessSettings: function() {},

  switchToMobileDataSettings: function() {},

  isADBModeEnabled: function(successCallback, errorCallback) {},

  isDeviceRooted: function(successCallback, errorCallback) {},

  restart: function(errorCallback, cold) {},

  getArchitecture: function(successCallback, errorCallback) {},

  isDataRoamingEnabled: function(successCallback, errorCallback) {},

  isLocationAvailable: function(successCallback, errorCallback) {},

  isLocationEnabled: function(successCallback, errorCallback) {},

  isGpsLocationAvailable: function(successCallback, errorCallback) {},

  isGpsLocationEnabled: function(successCallback, errorCallback) {},

  isNetworkLocationAvailable: function(successCallback, errorCallback) {},

  isNetworkLocationEnabled: function(successCallback, errorCallback) {},

  getLocationMode: function(successCallback, errorCallback) {},

  switchToLocationSettings: function() {},

  requestLocationAuthorization: function(successCallback, errorCallback) {},

  getLocationAuthorizationStatus: function(successCallback, errorCallback) {},

  isLocationAuthorized: function(successCallback, errorCallback) {},

  registerLocationStateChangeHandler: function(successCallback) {},

  isWifiEnabled: function(successCallback, errorCallback) {},

  isWifiAvailable: function(successCallback, errorCallback) {},

  switchToWifiSettings: function() {},

  setWifiState: function(successCallback, errorCallback, state) {},

  isCameraAvailable: function(params) {},

  isCameraPresent: function(successCallback, errorCallback) {},

  requestCameraAuthorization: function(params) {},

  getCameraAuthorizationStatus: function(params) {},

  isCameraAuthorized: function(params) {},

  requestExternalStorageAuthorization: function(
    successCallback,
    errorCallback
  ) {},

  getExternalStorageAuthorizationStatus: function(
    successCallback,
    errorCallback
  ) {},

  isExternalStorageAuthorized: function(successCallback, errorCallback) {},

  getExternalSdCardDetails: function(successCallback, errorCallback) {},

  isBluetoothAvailable: function(successCallback, errorCallback) {},

  isBluetoothEnabled: function(successCallback, errorCallback) {},

  setBluetoothState: function(successCallback, errorCallback, state) {},

  getBluetoothState: function(successCallback, errorCallback) {},

  registerBluetoothStateChangeHandler: function(successCallback) {},

  hasBluetoothSupport: function(successCallback, errorCallback) {},

  hasBluetoothLESupport: function(successCallback, errorCallback) {},

  hasBluetoothLEPeripheralSupport: function(successCallback, errorCallback) {},

  switchToBluetoothSettings: function() {},

  isRemoteNotificationsEnabled: function(successCallback, errorCallback) {},

  isMicrophoneAuthorized: function(successCallback, errorCallback) {},

  getMicrophoneAuthorizationStatus: function(successCallback, errorCallback) {},

  requestMicrophoneAuthorization: function(successCallback, errorCallback) {},

  isContactsAuthorized: function(successCallback, errorCallback) {},

  getContactsAuthorizationStatus: function(successCallback, errorCallback) {},

  requestContactsAuthorization: function(successCallback, errorCallback) {},

  isCalendarAuthorized: function(successCallback, errorCallback) {},

  getCalendarAuthorizationStatus: function(successCallback, errorCallback) {},

  requestCalendarAuthorization: function(successCallback, errorCallback) {},

  isNFCPresent: function(successCallback, errorCallback) {},

  isNFCEnabled: function(successCallback, errorCallback) {},

  isNFCAvailable: function(successCallback, errorCallback) {},

  registerNFCStateChangeHandler: function(successCallback) {},

  switchToNFCSettings: function() {},

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
    _onLocationStateChange: function() {},

    isLocationAvailable: function(successCallback, errorCallback) {},

    isLocationEnabled: function(successCallback, errorCallback) {},

    isGpsLocationAvailable: function(successCallback, errorCallback) {},

    isGpsLocationEnabled: function(successCallback, errorCallback) {},

    isNetworkLocationAvailable: function(successCallback, errorCallback) {},

    isNetworkLocationEnabled: function(successCallback, errorCallback) {},

    getLocationMode: function(successCallback, errorCallback) {},

    switchToLocationSettings: function() {},

    requestLocationAuthorization: function(successCallback, errorCallback) {},

    getLocationAuthorizationStatus: function(successCallback, errorCallback) {},

    isLocationAuthorized: function(successCallback, errorCallback) {},

    registerLocationStateChangeHandler: function(successCallback) {},
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
    _onBluetoothStateChange: function() {},

    isBluetoothAvailable: function(successCallback, errorCallback) {},

    isBluetoothEnabled: function(successCallback, errorCallback) {},

    setBluetoothState: function(successCallback, errorCallback, state) {},

    getBluetoothState: function(successCallback, errorCallback) {},

    registerBluetoothStateChangeHandler: function(successCallback) {},

    hasBluetoothSupport: function(successCallback, errorCallback) {},

    hasBluetoothLESupport: function(successCallback, errorCallback) {},

    hasBluetoothLEPeripheralSupport: function(
      successCallback,
      errorCallback
    ) {},

    switchToBluetoothSettings: function() {},
  },
  wifi: {
    isWifiEnabled: function(successCallback, errorCallback) {},

    isWifiAvailable: function(successCallback, errorCallback) {},

    switchToWifiSettings: function() {},

    setWifiState: function(successCallback, errorCallback, state) {},
  },
  camera: {
    isCameraAvailable: function(params) {},

    isCameraPresent: function(successCallback, errorCallback) {},

    requestCameraAuthorization: function(params) {},

    getCameraAuthorizationStatus: function(params) {},

    isCameraAuthorized: function(params) {},
  },
  notifications: {
    isRemoteNotificationsEnabled: function(successCallback, errorCallback) {},
  },
  microphone: {
    isMicrophoneAuthorized: function(successCallback, errorCallback) {},

    getMicrophoneAuthorizationStatus: function(
      successCallback,
      errorCallback
    ) {},

    requestMicrophoneAuthorization: function(successCallback, errorCallback) {},
  },
  contacts: {
    isContactsAuthorized: function(successCallback, errorCallback) {},

    getContactsAuthorizationStatus: function(successCallback, errorCallback) {},

    requestContactsAuthorization: function(successCallback, errorCallback) {},
  },
  calendar: {
    isCalendarAuthorized: function(successCallback, errorCallback) {},

    getCalendarAuthorizationStatus: function(successCallback, errorCallback) {},

    requestCalendarAuthorization: function(successCallback, errorCallback) {},
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
    _onNFCStateChange: function() {},

    isNFCPresent: function(successCallback, errorCallback) {},

    isNFCEnabled: function(successCallback, errorCallback) {},

    isNFCAvailable: function(successCallback, errorCallback) {},

    registerNFCStateChangeHandler: function(successCallback) {},

    switchToNFCSettings: function() {},
  },
  external_storage: {
    requestExternalStorageAuthorization: function(
      successCallback,
      errorCallback
    ) {},

    getExternalStorageAuthorizationStatus: function(
      successCallback,
      errorCallback
    ) {},

    isExternalStorageAuthorized: function(successCallback, errorCallback) {},

    getExternalSdCardDetails: function(successCallback, errorCallback) {},
  },
}
