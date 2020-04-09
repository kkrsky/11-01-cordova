let tee = [
  'switchToSettings',
  'switchToWirelessSettings',
  'switchToMobileDataSettings',
  'PermissionStatus',
  'getPermissionAuthorizationStatus',
  'getPermissionsAuthorizationStatus',
  'requestRuntimePermission',
  'requestRuntimePermissions',
  'isRequestingPermission',
  'registerPermissionRequestCompleteHandler',
  'isDataRoamingEnabled',
  'isADBModeEnabled',
  'isDeviceRooted',
  'isBackgroundRefreshAuthorized',
  'getBackgroundRefreshStatus',
  'cpuArchitecture',
  'getArchitecture',
  'restart',
  'enableDebug',
  'locationMode',
  'locationAuthorizationMode',
  'isLocationAvailable',
  'isLocationEnabled',
  'isGpsLocationAvailable',
  'isGpsLocationEnabled',
  'isNetworkLocationAvailable',
  'isNetworkLocationEnabled',
  'getLocationMode',
  'isLocationAuthorized',
  'getLocationAuthorizationStatus',
  'requestLocationAuthorization',
  'registerLocationStateChangeHandler',
  'switchToLocationSettings',
  'bluetoothState',
  'isBluetoothAvailable',
  'isBluetoothEnabled',
  'hasBluetoothSupport',
  'hasBluetoothLESupport',
  'hasBluetoothLEPeripheralSupport',
  'getBluetoothState',
  'setBluetoothState',
  'requestBluetoothAuthorization',
  'registerBluetoothStateChangeHandler',
  'switchToBluetoothSettings',
  'isWifiAvailable',
  'isWifiEnabled',
  'setWifiState',
  'switchToWifiSettings',
  'isCameraPresent',
  'isCameraAvailable',
  'isCameraAuthorized',
  'getCameraAuthorizationStatus',
  'requestCameraAuthorization',
  'isCameraRollAuthorized',
  'getCameraRollAuthorizationStatus',
  'requestCameraRollAuthorization',

  'remoteNotificationType',
  'isRemoteNotificationsEnabled',
  'isRegisteredForRemoteNotifications',
  'getRemoteNotificationTypes',
  'getRemoteNotificationsAuthorizationStatus',
  'requestRemoteNotificationsAuthorization',

  'isMicrophoneAuthorized',
  'getMicrophoneAuthorizationStatus',
  'requestMicrophoneAuthorization',

  'isContactsAuthorized',
  'getContactsAuthorizationStatus',
  'requestContactsAuthorization',

  'isCalendarAuthorized',
  'getCalendarAuthorizationStatus',
  'requestCalendarAuthorization',

  'isRemindersAuthorized',
  'getRemindersAuthorizationStatus',
  'requestRemindersAuthorization',

  'motionStatus',
  'isMotionAvailable',
  'isMotionRequestOutcomeAvailable',
  'requestMotionAuthorization',
  'getMotionAuthorizationStatus',

  'NFCState',
  'isNFCPresent',
  'isNFCEnabled',
  'isNFCAvailable',
  'registerNFCStateChangeHandler',
  'switchToNFCSettings',

  'isExternalStorageAuthorized',
  'getExternalStorageAuthorizationStatus',
  'requestExternalStorageAuthorization',
  'getExternalSdCardDetails',
]
/**
 
let tee = [
  'switchToSettings',
  'switchToWirelessSettings',
  'switchToMobileDataSettings',
  'PermissionStatus',
  'getPermissionAuthorizationStatus',
  'getPermissionsAuthorizationStatus',
  'requestRuntimePermission',
  'requestRuntimePermissions',
  'isRequestingPermission',
  'registerPermissionRequestCompleteHandler',
  'isDataRoamingEnabled',
  'isADBModeEnabled',
  'isDeviceRooted',
  'isBackgroundRefreshAuthorized',
  'getBackgroundRefreshStatus',
  'cpuArchitecture',
  'getArchitecture',
  'restart',
  'enableDebug',
  'locationMode',
  'locationAuthorizationMode',
  'isLocationAvailable',
  'isLocationEnabled',
  'isGpsLocationAvailable',
  'isGpsLocationEnabled',
  'isNetworkLocationAvailable',
  'isNetworkLocationEnabled',
  'getLocationMode',
  'isLocationAuthorized',
  'getLocationAuthorizationStatus',
  'requestLocationAuthorization',
  'registerLocationStateChangeHandler',
  'switchToLocationSettings',
  'bluetoothState',
  'isBluetoothAvailable',
  'isBluetoothEnabled',
  'hasBluetoothSupport',
  'hasBluetoothLESupport',
  'hasBluetoothLEPeripheralSupport',
  'getBluetoothState',
  'setBluetoothState',
  'requestBluetoothAuthorization',
  'registerBluetoothStateChangeHandler',
  'switchToBluetoothSettings',
  'isWifiAvailable',
  'isWifiEnabled',
  'setWifiState',
  'switchToWifiSettings',
  'isCameraPresent',
  'isCameraAvailable',
  'isCameraAuthorized',
  'getCameraAuthorizationStatus',
  'requestCameraAuthorization',
  'isCameraRollAuthorized',
  'getCameraRollAuthorizationStatus',
  'requestCameraRollAuthorization',

  'remoteNotificationType',
  'isRemoteNotificationsEnabled',
  'isRegisteredForRemoteNotifications',
  'getRemoteNotificationTypes',
  'getRemoteNotificationsAuthorizationStatus',
  'requestRemoteNotificationsAuthorization',

  'isMicrophoneAuthorized',
  'getMicrophoneAuthorizationStatus',
  'requestMicrophoneAuthorization',

  'isContactsAuthorized',
  'getContactsAuthorizationStatus',
  'requestContactsAuthorization',

  'isCalendarAuthorized',
  'getCalendarAuthorizationStatus',
  'requestCalendarAuthorization',

  'isRemindersAuthorized',
  'getRemindersAuthorizationStatus',
  'requestRemindersAuthorization',

  'motionStatus',
  'isMotionAvailable',
  'isMotionRequestOutcomeAvailable',
  'requestMotionAuthorization',
  'getMotionAuthorizationStatus',

  'NFCState',
  'isNFCPresent',
  'isNFCEnabled',
  'isNFCAvailable',
  'registerNFCStateChangeHandler',
  'switchToNFCSettings',

  'isExternalStorageAuthorized',
  'getExternalStorageAuthorizationStatus',
  'requestExternalStorageAuthorization',
  'getExternalSdCardDetails',
]

for(item of tee){
  console.log(item+":function(obj){console.log(c.cyan+'[start]','"+item+"'); cordova.plugins.diagnostic."+item+"(_cons,_cons,_cons)"
  +"},")
}
 */

switchToSettings:function(obj){console.log(c.cyan+'[start]','switchToSettings'); cordova.plugins.diagnostic.switchToSettings(_cons,_cons,_cons)},
switchToWirelessSettings:function(obj){console.log(c.cyan+'[start]','switchToWirelessSettings'); cordova.plugins.diagnostic.switchToWirelessSettings(_cons,_cons,_cons)},
switchToMobileDataSettings:function(obj){console.log(c.cyan+'[start]','switchToMobileDataSettings'); cordova.plugins.diagnostic.switchToMobileDataSettings(_cons,_cons,_cons)},
PermissionStatus:function(obj){console.log(c.cyan+'[start]','PermissionStatus'); cordova.plugins.diagnostic.PermissionStatus(_cons,_cons,_cons)},
getPermissionAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getPermissionAuthorizationStatus'); cordova.plugins.diagnostic.getPermissionAuthorizationStatus(_cons,_cons,_cons)},
getPermissionsAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getPermissionsAuthorizationStatus'); cordova.plugins.diagnostic.getPermissionsAuthorizationStatus(_cons,_cons,_cons)},
requestRuntimePermission:function(obj){console.log(c.cyan+'[start]','requestRuntimePermission'); cordova.plugins.diagnostic.requestRuntimePermission(_cons,_cons,_cons)},
requestRuntimePermissions:function(obj){console.log(c.cyan+'[start]','requestRuntimePermissions'); cordova.plugins.diagnostic.requestRuntimePermissions(_cons,_cons,_cons)},
isRequestingPermission:function(obj){console.log(c.cyan+'[start]','isRequestingPermission'); cordova.plugins.diagnostic.isRequestingPermission(_cons,_cons,_cons)},
registerPermissionRequestCompleteHandler:function(obj){console.log(c.cyan+'[start]','registerPermissionRequestCompleteHandler'); cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(_cons,_cons,_cons)},
isDataRoamingEnabled:function(obj){console.log(c.cyan+'[start]','isDataRoamingEnabled'); cordova.plugins.diagnostic.isDataRoamingEnabled(_cons,_cons,_cons)},
isADBModeEnabled:function(obj){console.log(c.cyan+'[start]','isADBModeEnabled'); cordova.plugins.diagnostic.isADBModeEnabled(_cons,_cons,_cons)},
isDeviceRooted:function(obj){console.log(c.cyan+'[start]','isDeviceRooted'); cordova.plugins.diagnostic.isDeviceRooted(_cons,_cons,_cons)},
isBackgroundRefreshAuthorized:function(obj){console.log(c.cyan+'[start]','isBackgroundRefreshAuthorized'); cordova.plugins.diagnostic.isBackgroundRefreshAuthorized(_cons,_cons,_cons)},
getBackgroundRefreshStatus:function(obj){console.log(c.cyan+'[start]','getBackgroundRefreshStatus'); cordova.plugins.diagnostic.getBackgroundRefreshStatus(_cons,_cons,_cons)},
cpuArchitecture:function(obj){console.log(c.cyan+'[start]','cpuArchitecture'); cordova.plugins.diagnostic.cpuArchitecture(_cons,_cons,_cons)},
getArchitecture:function(obj){console.log(c.cyan+'[start]','getArchitecture'); cordova.plugins.diagnostic.getArchitecture(_cons,_cons,_cons)},
restart:function(obj){console.log(c.cyan+'[start]','restart'); cordova.plugins.diagnostic.restart(_cons,_cons,_cons)},
enableDebug:function(obj){console.log(c.cyan+'[start]','enableDebug'); cordova.plugins.diagnostic.enableDebug(_cons,_cons,_cons)},

locationMode:function(obj){console.log(c.cyan+'[start]','locationMode'); cordova.plugins.diagnostic.locationMode(_cons,_cons,_cons)},
locationAuthorizationMode:function(obj){console.log(c.cyan+'[start]','locationAuthorizationMode'); cordova.plugins.diagnostic.locationAuthorizationMode(_cons,_cons,_cons)},
isLocationAvailable:function(obj){console.log(c.cyan+'[start]','isLocationAvailable'); cordova.plugins.diagnostic.isLocationAvailable(_cons,_cons,_cons)},
isLocationEnabled:function(obj){console.log(c.cyan+'[start]','isLocationEnabled'); cordova.plugins.diagnostic.isLocationEnabled(_cons,_cons,_cons)},
isGpsLocationAvailable:function(obj){console.log(c.cyan+'[start]','isGpsLocationAvailable'); cordova.plugins.diagnostic.isGpsLocationAvailable(_cons,_cons,_cons)},
isGpsLocationEnabled:function(obj){console.log(c.cyan+'[start]','isGpsLocationEnabled'); cordova.plugins.diagnostic.isGpsLocationEnabled(_cons,_cons,_cons)},
isNetworkLocationAvailable:function(obj){console.log(c.cyan+'[start]','isNetworkLocationAvailable'); cordova.plugins.diagnostic.isNetworkLocationAvailable(_cons,_cons,_cons)},
isNetworkLocationEnabled:function(obj){console.log(c.cyan+'[start]','isNetworkLocationEnabled'); cordova.plugins.diagnostic.isNetworkLocationEnabled(_cons,_cons,_cons)},
getLocationMode:function(obj){console.log(c.cyan+'[start]','getLocationMode'); cordova.plugins.diagnostic.getLocationMode(_cons,_cons,_cons)},
isLocationAuthorized:function(obj){console.log(c.cyan+'[start]','isLocationAuthorized'); cordova.plugins.diagnostic.isLocationAuthorized(_cons,_cons,_cons)},
getLocationAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getLocationAuthorizationStatus'); cordova.plugins.diagnostic.getLocationAuthorizationStatus(_cons,_cons,_cons)},
requestLocationAuthorization:function(obj){console.log(c.cyan+'[start]','requestLocationAuthorization'); cordova.plugins.diagnostic.requestLocationAuthorization(_cons,_cons,_cons)},
registerLocationStateChangeHandler:function(obj){console.log(c.cyan+'[start]','registerLocationStateChangeHandler'); cordova.plugins.diagnostic.registerLocationStateChangeHandler(_cons,_cons,_cons)},
switchToLocationSettings:function(obj){console.log(c.cyan+'[start]','switchToLocationSettings'); cordova.plugins.diagnostic.switchToLocationSettings(_cons,_cons,_cons)},

bluetoothState:function(obj){console.log(c.cyan+'[start]','bluetoothState'); cordova.plugins.diagnostic.bluetoothState(_cons,_cons,_cons)},
isBluetoothAvailable:function(obj){console.log(c.cyan+'[start]','isBluetoothAvailable'); cordova.plugins.diagnostic.isBluetoothAvailable(_cons,_cons,_cons)},
isBluetoothEnabled:function(obj){console.log(c.cyan+'[start]','isBluetoothEnabled'); cordova.plugins.diagnostic.isBluetoothEnabled(_cons,_cons,_cons)},
hasBluetoothSupport:function(obj){console.log(c.cyan+'[start]','hasBluetoothSupport'); cordova.plugins.diagnostic.hasBluetoothSupport(_cons,_cons,_cons)},
hasBluetoothLESupport:function(obj){console.log(c.cyan+'[start]','hasBluetoothLESupport'); cordova.plugins.diagnostic.hasBluetoothLESupport(_cons,_cons,_cons)},
hasBluetoothLEPeripheralSupport:function(obj){console.log(c.cyan+'[start]','hasBluetoothLEPeripheralSupport'); cordova.plugins.diagnostic.hasBluetoothLEPeripheralSupport(_cons,_cons,_cons)},
getBluetoothState:function(obj){console.log(c.cyan+'[start]','getBluetoothState'); cordova.plugins.diagnostic.getBluetoothState(_cons,_cons,_cons)},
setBluetoothState:function(obj){console.log(c.cyan+'[start]','setBluetoothState'); cordova.plugins.diagnostic.setBluetoothState(_cons,_cons,_cons)},
requestBluetoothAuthorization:function(obj){console.log(c.cyan+'[start]','requestBluetoothAuthorization'); cordova.plugins.diagnostic.requestBluetoothAuthorization(_cons,_cons,_cons)},
registerBluetoothStateChangeHandler:function(obj){console.log(c.cyan+'[start]','registerBluetoothStateChangeHandler'); cordova.plugins.diagnostic.registerBluetoothStateChangeHandler(_cons,_cons,_cons)},
switchToBluetoothSettings:function(obj){console.log(c.cyan+'[start]','switchToBluetoothSettings'); cordova.plugins.diagnostic.switchToBluetoothSettings(_cons,_cons,_cons)},

isWifiAvailable:function(obj){console.log(c.cyan+'[start]','isWifiAvailable'); cordova.plugins.diagnostic.isWifiAvailable(_cons,_cons,_cons)},
isWifiEnabled:function(obj){console.log(c.cyan+'[start]','isWifiEnabled'); cordova.plugins.diagnostic.isWifiEnabled(_cons,_cons,_cons)},
setWifiState:function(obj){console.log(c.cyan+'[start]','setWifiState'); cordova.plugins.diagnostic.setWifiState(_cons,_cons,_cons)},
switchToWifiSettings:function(obj){console.log(c.cyan+'[start]','switchToWifiSettings'); cordova.plugins.diagnostic.switchToWifiSettings(_cons,_cons,_cons)},

isCameraPresent:function(obj){console.log(c.cyan+'[start]','isCameraPresent'); cordova.plugins.diagnostic.isCameraPresent(_cons,_cons,_cons)},
isCameraAvailable:function(obj){console.log(c.cyan+'[start]','isCameraAvailable'); cordova.plugins.diagnostic.isCameraAvailable(_cons,_cons,_cons)},
isCameraAuthorized:function(obj){console.log(c.cyan+'[start]','isCameraAuthorized'); cordova.plugins.diagnostic.isCameraAuthorized(_cons,_cons,_cons)},
getCameraAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getCameraAuthorizationStatus'); cordova.plugins.diagnostic.getCameraAuthorizationStatus(_cons,_cons,_cons)},
requestCameraAuthorization:function(obj){console.log(c.cyan+'[start]','requestCameraAuthorization'); cordova.plugins.diagnostic.requestCameraAuthorization(_cons,_cons,_cons)},
isCameraRollAuthorized:function(obj){console.log(c.cyan+'[start]','isCameraRollAuthorized'); cordova.plugins.diagnostic.isCameraRollAuthorized(_cons,_cons,_cons)},
getCameraRollAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getCameraRollAuthorizationStatus'); cordova.plugins.diagnostic.getCameraRollAuthorizationStatus(_cons,_cons,_cons)},
requestCameraRollAuthorization:function(obj){console.log(c.cyan+'[start]','requestCameraRollAuthorization'); cordova.plugins.diagnostic.requestCameraRollAuthorization(_cons,_cons,_cons)},

remoteNotificationType:function(obj){console.log(c.cyan+'[start]','remoteNotificationType'); cordova.plugins.diagnostic.remoteNotificationType(_cons,_cons,_cons)},
isRemoteNotificationsEnabled:function(obj){console.log(c.cyan+'[start]','isRemoteNotificationsEnabled'); cordova.plugins.diagnostic.isRemoteNotificationsEnabled(_cons,_cons,_cons)},
isRegisteredForRemoteNotifications:function(obj){console.log(c.cyan+'[start]','isRegisteredForRemoteNotifications'); cordova.plugins.diagnostic.isRegisteredForRemoteNotifications(_cons,_cons,_cons)},
getRemoteNotificationTypes:function(obj){console.log(c.cyan+'[start]','getRemoteNotificationTypes'); cordova.plugins.diagnostic.getRemoteNotificationTypes(_cons,_cons,_cons)},
getRemoteNotificationsAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getRemoteNotificationsAuthorizationStatus'); cordova.plugins.diagnostic.getRemoteNotificationsAuthorizationStatus(_cons,_cons,_cons)},
requestRemoteNotificationsAuthorization:function(obj){console.log(c.cyan+'[start]','requestRemoteNotificationsAuthorization'); cordova.plugins.diagnostic.requestRemoteNotificationsAuthorization(_cons,_cons,_cons)},

isMicrophoneAuthorized:function(obj){console.log(c.cyan+'[start]','isMicrophoneAuthorized'); cordova.plugins.diagnostic.isMicrophoneAuthorized(_cons,_cons,_cons)},
getMicrophoneAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getMicrophoneAuthorizationStatus'); cordova.plugins.diagnostic.getMicrophoneAuthorizationStatus(_cons,_cons,_cons)},
requestMicrophoneAuthorization:function(obj){console.log(c.cyan+'[start]','requestMicrophoneAuthorization'); cordova.plugins.diagnostic.requestMicrophoneAuthorization(_cons,_cons,_cons)},

isContactsAuthorized:function(obj){console.log(c.cyan+'[start]','isContactsAuthorized'); cordova.plugins.diagnostic.isContactsAuthorized(_cons,_cons,_cons)},
getContactsAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getContactsAuthorizationStatus'); cordova.plugins.diagnostic.getContactsAuthorizationStatus(_cons,_cons,_cons)},
requestContactsAuthorization:function(obj){console.log(c.cyan+'[start]','requestContactsAuthorization'); cordova.plugins.diagnostic.requestContactsAuthorization(_cons,_cons,_cons)},

isCalendarAuthorized:function(obj){console.log(c.cyan+'[start]','isCalendarAuthorized'); cordova.plugins.diagnostic.isCalendarAuthorized(_cons,_cons,_cons)},
getCalendarAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getCalendarAuthorizationStatus'); cordova.plugins.diagnostic.getCalendarAuthorizationStatus(_cons,_cons,_cons)},
requestCalendarAuthorization:function(obj){console.log(c.cyan+'[start]','requestCalendarAuthorization'); cordova.plugins.diagnostic.requestCalendarAuthorization(_cons,_cons,_cons)},

isRemindersAuthorized:function(obj){console.log(c.cyan+'[start]','isRemindersAuthorized'); cordova.plugins.diagnostic.isRemindersAuthorized(_cons,_cons,_cons)},
getRemindersAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getRemindersAuthorizationStatus'); cordova.plugins.diagnostic.getRemindersAuthorizationStatus(_cons,_cons,_cons)},
requestRemindersAuthorization:function(obj){console.log(c.cyan+'[start]','requestRemindersAuthorization'); cordova.plugins.diagnostic.requestRemindersAuthorization(_cons,_cons,_cons)},

motionStatus:function(obj){console.log(c.cyan+'[start]','motionStatus'); cordova.plugins.diagnostic.motionStatus(_cons,_cons,_cons)},
isMotionAvailable:function(obj){console.log(c.cyan+'[start]','isMotionAvailable'); cordova.plugins.diagnostic.isMotionAvailable(_cons,_cons,_cons)},
isMotionRequestOutcomeAvailable:function(obj){console.log(c.cyan+'[start]','isMotionRequestOutcomeAvailable'); cordova.plugins.diagnostic.isMotionRequestOutcomeAvailable(_cons,_cons,_cons)},
requestMotionAuthorization:function(obj){console.log(c.cyan+'[start]','requestMotionAuthorization'); cordova.plugins.diagnostic.requestMotionAuthorization(_cons,_cons,_cons)},
getMotionAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getMotionAuthorizationStatus'); cordova.plugins.diagnostic.getMotionAuthorizationStatus(_cons,_cons,_cons)},

NFCState:function(obj){console.log(c.cyan+'[start]','NFCState'); cordova.plugins.diagnostic.NFCState(_cons,_cons,_cons)},
isNFCPresent:function(obj){console.log(c.cyan+'[start]','isNFCPresent'); cordova.plugins.diagnostic.isNFCPresent(_cons,_cons,_cons)},
isNFCEnabled:function(obj){console.log(c.cyan+'[start]','isNFCEnabled'); cordova.plugins.diagnostic.isNFCEnabled(_cons,_cons,_cons)},
isNFCAvailable:function(obj){console.log(c.cyan+'[start]','isNFCAvailable'); cordova.plugins.diagnostic.isNFCAvailable(_cons,_cons,_cons)},
registerNFCStateChangeHandler:function(obj){console.log(c.cyan+'[start]','registerNFCStateChangeHandler'); cordova.plugins.diagnostic.registerNFCStateChangeHandler(_cons,_cons,_cons)},
switchToNFCSettings:function(obj){console.log(c.cyan+'[start]','switchToNFCSettings'); cordova.plugins.diagnostic.switchToNFCSettings(_cons,_cons,_cons)},

isExternalStorageAuthorized:function(obj){console.log(c.cyan+'[start]','isExternalStorageAuthorized'); cordova.plugins.diagnostic.isExternalStorageAuthorized(_cons,_cons,_cons)},
getExternalStorageAuthorizationStatus:function(obj){console.log(c.cyan+'[start]','getExternalStorageAuthorizationStatus'); cordova.plugins.diagnostic.getExternalStorageAuthorizationStatus(_cons,_cons,_cons)},
requestExternalStorageAuthorization:function(obj){console.log(c.cyan+'[start]','requestExternalStorageAuthorization'); cordova.plugins.diagnostic.requestExternalStorageAuthorization(_cons,_cons,_cons)},
getExternalSdCardDetails:function(obj){console.log(c.cyan+'[start]','getExternalSdCardDetails'); cordova.plugins.diagnostic.getExternalSdCardDetails(_cons,_cons,_cons)},





this.switchToSettings(obj_pass)
this.switchToWirelessSettings(obj_pass)
this.switchToMobileDataSettings(obj_pass)
this.PermissionStatus(obj_pass)
this.getPermissionAuthorizationStatus(obj_pass)
this.getPermissionsAuthorizationStatus(obj_pass)
this.requestRuntimePermission(obj_pass)
this.requestRuntimePermissions(obj_pass)
this.isRequestingPermission(obj_pass)
this.registerPermissionRequestCompleteHandler(obj_pass)
this.isDataRoamingEnabled(obj_pass)
this.isADBModeEnabled(obj_pass)
this.isDeviceRooted(obj_pass)
this.isBackgroundRefreshAuthorized(obj_pass)
this.getBackgroundRefreshStatus(obj_pass)
this.cpuArchitecture(obj_pass)
this.getArchitecture(obj_pass)
this.restart(obj_pass)
this.enableDebug(obj_pass)

this.locationMode(obj_pass)
this.locationAuthorizationMode(obj_pass)
this.isLocationAvailable(obj_pass)
this.isLocationEnabled(obj_pass)
this.isGpsLocationAvailable(obj_pass)
this.isGpsLocationEnabled(obj_pass)
this.isNetworkLocationAvailable(obj_pass)
this.isNetworkLocationEnabled(obj_pass)
this.getLocationMode(obj_pass)
this.isLocationAuthorized(obj_pass)
this.getLocationAuthorizationStatus(obj_pass)
this.requestLocationAuthorization(obj_pass)
this.registerLocationStateChangeHandler(obj_pass)
this.switchToLocationSettings(obj_pass)

this.bluetoothState(obj_pass)
this.isBluetoothAvailable(obj_pass)
this.isBluetoothEnabled(obj_pass)
this.hasBluetoothSupport(obj_pass)
this.hasBluetoothLESupport(obj_pass)
this.hasBluetoothLEPeripheralSupport(obj_pass)
this.getBluetoothState(obj_pass)
this.setBluetoothState(obj_pass)
this.requestBluetoothAuthorization(obj_pass)
this.registerBluetoothStateChangeHandler(obj_pass)
this.switchToBluetoothSettings(obj_pass)

this.isWifiAvailable(obj_pass)
this.isWifiEnabled(obj_pass)
this.setWifiState(obj_pass)
this.switchToWifiSettings(obj_pass)

this.isCameraPresent(obj_pass)
this.isCameraAvailable(obj_pass)
this.isCameraAuthorized(obj_pass)
this.getCameraAuthorizationStatus(obj_pass)
this.requestCameraAuthorization(obj_pass)
this.isCameraRollAuthorized(obj_pass)
this.getCameraRollAuthorizationStatus(obj_pass)
this.requestCameraRollAuthorization(obj_pass)

this.remoteNotificationType(obj_pass)
this.isRemoteNotificationsEnabled(obj_pass)
this.isRegisteredForRemoteNotifications(obj_pass)
this.getRemoteNotificationTypes(obj_pass)
this.getRemoteNotificationsAuthorizationStatus(obj_pass)
this.requestRemoteNotificationsAuthorization(obj_pass)

this.isMicrophoneAuthorized(obj_pass)
this.getMicrophoneAuthorizationStatus(obj_pass)
this.requestMicrophoneAuthorization(obj_pass)

this.isContactsAuthorized(obj_pass)
this.getContactsAuthorizationStatus(obj_pass)
this.requestContactsAuthorization(obj_pass)

this.isCalendarAuthorized(obj_pass)
this.getCalendarAuthorizationStatus(obj_pass)
this.requestCalendarAuthorization(obj_pass)

this.isRemindersAuthorized(obj_pass)
this.getRemindersAuthorizationStatus(obj_pass)
this.requestRemindersAuthorization(obj_pass)

this.motionStatus(obj_pass)
this.isMotionAvailable(obj_pass)
this.isMotionRequestOutcomeAvailable(obj_pass)
this.requestMotionAuthorization(obj_pass)
this.getMotionAuthorizationStatus(obj_pass)

this.NFCState(obj_pass)
this.isNFCPresent(obj_pass)
this.isNFCEnabled(obj_pass)
this.isNFCAvailable(obj_pass)
this.registerNFCStateChangeHandler(obj_pass)
this.switchToNFCSettings(obj_pass)

this.isExternalStorageAuthorized(obj_pass)
this.getExternalStorageAuthorizationStatus(obj_pass)
this.requestExternalStorageAuthorization(obj_pass)
this.getExternalSdCardDetails(obj_pass)