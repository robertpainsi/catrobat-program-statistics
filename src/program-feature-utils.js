'use strict';

// Features
const LIST = 'list';
const VARIABLE = 'variable';
const TEXT = 'text';
const CLONE = 'clone';
const PEN = 'pen';
const PHYSICS = 'physics';
const TOUCH = 'touch';
const FINGER = 'finger';
const FACE_DETECTION = 'faceDetection';
const DATE_TIME = 'dateTime';
const SPEECH = 'textToSpeech';
const CAST = 'cast';
const USER_BRICK = 'userBrick';

const HARDWARE = 'hardware';
const EXTERNAL_HARDWARE = 'externalHardware';
const INTERNAL_HARDWARE = 'internalHardware';
const BLUETOOTH = 'bluetooth';
const WLAN = 'wlan';
const NFC = 'nfc';

const CAMERA = 'camera';
const FLASH = 'flash';
const LOCATION = 'location';
const PHONE_SENSOR = 'phoneSensor';

const ARDUINO = 'arduino';
const DRONE = 'drone';
const LEGO = 'lego';
const PHIRO = 'phiro';
const RASPBERRY_PI = 'raspberryPi';

// Feature Groups
const VARIABLE_FEATURES = [VARIABLE];
const LIST_FEATURES = [LIST];
const TEXT_FEATURES = [TEXT];
const PEN_FEATURES = [PEN];
const CLONE_FEATURES = [CLONE];
const PHYSICS_FEATURES = [PHYSICS];
const TOUCH_FEATURES = [TOUCH];
const FINGER_FEATURES = [FINGER];
const DATE_TIME_FEATURES = [DATE_TIME];
const SPEECH_FEATURES = [SPEECH];
const USER_BRICK_FEATURES = [USER_BRICK];

const PHONE_SENSOR_FEATURES = [PHONE_SENSOR, INTERNAL_HARDWARE, HARDWARE];
const CAMERA_FEATURES = [CAMERA, INTERNAL_HARDWARE, HARDWARE];
const FLASH_FEATURES = [FLASH, INTERNAL_HARDWARE, HARDWARE];
const FACE_DETECTION_FEATURES = [FACE_DETECTION, INTERNAL_HARDWARE, HARDWARE];
const NFC_FEATURES = [NFC, INTERNAL_HARDWARE, HARDWARE];
const LOCATION_FEATURES = [LOCATION, INTERNAL_HARDWARE, HARDWARE];

const ARDUINO_FEATURES = [ARDUINO, BLUETOOTH, EXTERNAL_HARDWARE, HARDWARE];
const CAST_FEATURES = [CAST, WLAN, EXTERNAL_HARDWARE, HARDWARE];
const DRONE_FEATURES = [DRONE, WLAN, EXTERNAL_HARDWARE, HARDWARE];
const LEGO_FEATURES = [LEGO, BLUETOOTH, WLAN, EXTERNAL_HARDWARE, HARDWARE];
const PHIRO_FEATURES = [PHIRO, BLUETOOTH, EXTERNAL_HARDWARE, HARDWARE];
const RASPBERRY_PI_FEATURES = [RASPBERRY_PI, WLAN, EXTERNAL_HARDWARE, HARDWARE];

export function getFeaturesFromBrick(brick) {
    switch (brick) {
        case 'BroadcastBrick':
        case 'BroadcastScript':
        case 'BroadcastWaitBrick':
        case 'ChangeBrightnessByNBrick':
        case 'ChangeColorByNBrick':
        case 'ChangeSizeByNBrick':
        case 'ChangeTransparencyByNBrick':
        case 'ChangeVolumeByNBrick':
        case 'ChangeXByNBrick':
        case 'ChangeYByNBrick':
        case 'ClearGraphicEffectBrick':
        case 'ComeToFrontBrick':
        case 'ForeverBrick':
        case 'GlideToBrick':
        case 'GoNStepsBackBrick':
        case 'GoToBrick':
        case 'HideBrick':
        case 'HideTextBrick':
        case 'IfLogicBeginBrick':
        case 'IfLogicBeginSimpleBrick':
        case 'IfLogicElseBrick':
        case 'IfLogicElseSimpleBrick':
        case 'IfLogicEndBrick':
        case 'IfLogicEndSimpleBrick':
        case 'IfOnEdgeBounceBrick':
        case 'IfThenLogicBeginBrick':
        case 'IfThenLogicEndBrick':
        case 'LoopEndBrick':
        case 'LoopEndlessBrick':
        case 'MoveNStepsBrick':
        case 'NextLookBrick':
        case 'NoteBrick':
        case 'PlaceAtBrick':
        case 'PlaySoundAndWaitBrick':
        case 'PlaySoundBrick':
        case 'PointInDirectionBrick':
        case 'PointToBrick':
        case 'PreviousLookBrick':
        case 'RepeatBrick':
        case 'RepeatUntilBrick':
        case 'SayBubbleBrick':
        case 'SayForBubbleBrick':
        case 'SceneStartBrick':
        case 'SceneTransitionBrick':
        case 'SetBackgroundAndWaitBrick':
        case 'SetBackgroundBrick':
        case 'SetBackgroundByIndexAndWaitBrick':
        case 'SetBackgroundByIndexBrick':
        case 'SetBrightnessBrick':
        case 'SetColorBrick':
        case 'SetLookBrick':
        case 'SetLookByIndexBrick':
        case 'SetRotationStyleBrick':
        case 'SetSizeToBrick':
        case 'SetTransparencyBrick':
        case 'SetVolumeToBrick':
        case 'SetXBrick':
        case 'SetYBrick':
        case 'ShowBrick':
        case 'ShowTextBrick':
        case 'SpeakAndWaitBrick':
        case 'SpeakBrick':
        case 'StampBrick':
        case 'StartScript':
        case 'StopAllSoundsBrick':
        case 'StopScriptBrick':
        case 'ThinkBubbleBrick':
        case 'ThinkForBubbleBrick':
        case 'TurnLeftBrick':
        case 'TurnRightBrick':
        case 'VibrationBrick':
        case 'VideoBrick':
        case 'WaitBrick':
        case 'WaitUntilBrick':
        case 'WhenBackgroundChangesScript':
        case 'WhenBrick':
        case 'WhenConditionScript':
        case 'WhenScript':
        case 'WhenTouchDownScript':
            return [];

        case 'ChangeVariableBrick':
        case 'SetVariableBrick':
        case 'ShowVariableBrick':
            return [...VARIABLE_FEATURES];
        case 'AddItemToUserListBrick':
        case 'DeleteItemOfUserListBrick':
        case 'InsertItemIntoUserListBrick':
        case 'ReplaceItemInUserListBrick':
            return [...LIST_FEATURES];

        case 'ClearBackgroundBrick':
        case 'PenDownBrick':
        case 'PenUpBrick':
        case 'SetPenColorBrick':
        case 'SetPenSizeBrick':
            return [...PEN_FEATURES];
        case 'CloneBrick':
        case 'DeleteThisCloneBrick':
        case 'WhenClonedScript':
            return [...CLONE_FEATURES];
        case 'CollisionScript':
        case 'SetBounceBrick':
        case 'SetFrictionBrick':
        case 'SetGravityBrick':
        case 'SetMassBrick':
        case 'SetPhysicsObjectTypeBrick':
        case 'SetVelocityBrick':
        case 'TurnLeftSpeedBrick':
        case 'TurnRightSpeedBrick':
            return [...PHYSICS_FEATURES];
        case 'AskBrick': // TODO: Maybe add askish feature
            return [...VARIABLE_FEATURES];
        case 'AskSpeechBrick': // TODO: Maybe add askish feature
            return [...SPEECH_FEATURES, ...VARIABLE_FEATURES];
        case 'UserBrick':
            return [...USER_BRICK_FEATURES];

        case 'CameraBrick':
        case 'ChooseCameraBrick':
            return [...CAMERA_FEATURES];
        case 'FlashBrick':
            return [...FLASH_FEATURES];
        case 'SetNfcTagBrick':
        case 'WhenNfcScript':
            return [...NFC_FEATURES];
        case 'WhenGamepadButtonScript':
            return [...CAST_FEATURES];

        case 'ArduinoSendDigitalValueBrick':
        case 'ArduinoSendPWMValueBrick':
            return [...ARDUINO_FEATURES];
        case 'DroneEmergencyBrick':
        case 'DroneMoveBackwardBrick':
        case 'DroneMoveDownBrick':
        case 'DroneMoveForwardBrick':
        case 'DroneMoveLeftBrick':
        case 'DroneMoveRightBrick':
        case 'DroneMoveUpBrick':
        case 'DroneSwitchCameraBrick':
        case 'DroneTakeOffLandBrick':
        case 'DroneTurnLeftBrick':
        case 'DroneTurnRightBrick':
            return [...DRONE_FEATURES];
        case 'LegoEv3MotorMoveBrick':
        case 'LegoEv3MotorStopBrick':
        case 'LegoEv3PlayToneBrick':
        case 'LegoEv3SetLedBrick':
        case 'LegoNxtMotorMoveBrick':
        case 'LegoNxtMotorStopBrick':
        case 'LegoNxtMotorTurnAngleBrick':
        case 'LegoNxtPlayToneBrick':
            return [...LEGO_FEATURES];
        case 'PhiroIfLogicBeginBrick':
        case 'PhiroMotorMoveBackwardBrick':
        case 'PhiroMotorMoveForwardBrick':
        case 'PhiroMotorStopBrick':
        case 'PhiroPlayToneBrick':
        case 'PhiroRGBLightBrick':
            return [...PHIRO_FEATURES];
        case 'RaspiIfLogicBeginBrick':
        case 'RaspiInterruptScript':
        case 'RaspiPwmBrick':
        case 'RaspiSendDigitalValueBrick':
            return [...RASPBERRY_PI_FEATURES];
    }
    throw new Error(`No features set for brick ${brick}`);
}

export function getFeaturesFromFormula(formula, category) {
    switch (category) {
        case undefined:
            switch (formula) {
                case 'BRACKET':
                case 'NUMBER':
                    return [];
                case 'STRING':
                    return [...TEXT_FEATURES];
                case 'COLLISION_FORMULA':
                    return [...TOUCH_FEATURES];
                case 'USER_LIST':
                    return [...LIST_FEATURES];
                case 'USER_VARIABLE':
                    return [...VARIABLE_FEATURES];
            }
            break;
        case 'FUNCTION':
            switch (formula) {
                case 'ABS':
                case 'ARCCOS':
                case 'ARCSIN':
                case 'ARCTAN':
                case 'CEIL':
                case 'COS':
                case 'EXP':
                case 'FALSE':
                case 'FLOOR':
                case 'LN':
                case 'LOG':
                case 'MAX':
                case 'MIN':
                case 'MOD':
                case 'PI':
                case 'POWER':
                case 'RAND':
                case 'ROUND':
                case 'SIN':
                case 'SQRT':
                case 'TAN':
                case 'TRUE':
                    return [];

                case 'JOIN':
                case 'LENGTH':
                case 'LETTER':
                    return [...TEXT_FEATURES];
                case 'CONTAINS':
                case 'LIST_ITEM':
                case 'NUMBER_OF_ITEMS':
                    return [...LIST_FEATURES];
                case 'MULTI_FINGER_TOUCHED':
                case 'MULTI_FINGER_X':
                case 'MULTI_FINGER_Y':
                    return [...FINGER_FEATURES];

                case 'ARDUINOANALOG':
                case 'ARDUINODIGITAL':
                    return [...ARDUINO_FEATURES];
                case 'RASPIDIGITAL':
                    return [...RASPBERRY_PI_FEATURES];
            }
            break;
        case 'OPERATOR':
            switch (formula) {
                case 'DIVIDE':
                case 'EQUAL':
                case 'GREATER_OR_EQUAL':
                case 'GREATER_THAN':
                case 'LOGICAL_AND':
                case 'LOGICAL_NOT':
                case 'LOGICAL_OR':
                case 'MINUS':
                case 'MULT':
                case 'NOT_EQUAL':
                case 'PLUS':
                case 'SMALLER_OR_EQUAL':
                case 'SMALLER_THAN':
                    return [];
            }
            break;
        case 'SENSOR':
            switch (formula) {
                case 'LOUDNESS':
                case 'OBJECT_BACKGROUND_NAME':
                case 'OBJECT_BACKGROUND_NUMBER':
                case 'OBJECT_BRIGHTNESS':
                case 'OBJECT_COLOR':
                case 'OBJECT_LAYER':
                case 'OBJECT_LOOK_NAME':
                case 'OBJECT_LOOK_NUMBER':
                case 'OBJECT_ROTATION':
                case 'OBJECT_SIZE':
                case 'OBJECT_TRANSPARENCY':
                case 'OBJECT_X':
                case 'OBJECT_Y':
                case 'OBJECT_DISTANCE_TO':
                    return [];

                case 'OBJECT_ANGULAR_VELOCITY':
                case 'OBJECT_X_VELOCITY':
                case 'OBJECT_Y_VELOCITY':
                    return [...PHYSICS_FEATURES];
                case 'COLLIDES_WITH_EDGE':
                    return [...TOUCH_FEATURES];
                case 'COLLIDES_WITH_FINGER':
                    return [...TOUCH_FEATURES, FINGER_FEATURES];
                case 'FINGER_TOUCHED':
                case 'FINGER_X':
                case 'FINGER_Y':
                case 'LAST_FINGER_INDEX':
                    return [...FINGER_FEATURES];
                case 'DATE_DAY':
                case 'DATE_MONTH':
                case 'DATE_WEEKDAY':
                case 'DATE_YEAR':
                case 'TIME_HOUR':
                case 'TIME_MINUTE':
                case 'TIME_SECOND':
                    return [...DATE_TIME_FEATURES];
                case 'FACE_DETECTED':
                case 'FACE_SIZE':
                case 'FACE_X_POSITION':
                case 'FACE_Y_POSITION':
                    return [...FACE_DETECTION_FEATURES];

                case 'X_ACCELERATION':
                case 'X_INCLINATION':
                case 'Y_ACCELERATION':
                case 'Y_INCLINATION':
                case 'Z_ACCELERATION':
                    return [...PHONE_SENSOR_FEATURES];
                case 'ALTITUDE':
                case 'LONGITUDE':
                case 'COMPASS_DIRECTION':
                case 'LATITUDE':
                case 'LOCATION_ACCURACY':
                    return [...LOCATION_FEATURES];

                case 'DRONE_BATTERY_STATUS':
                    return [...DRONE_FEATURES];
                case 'EV3_SENSOR_1':
                case 'EV3_SENSOR_3':
                case 'EV3_SENSOR_4':
                case 'NXT_SENSOR_1':
                case 'NXT_SENSOR_2':
                case 'NXT_SENSOR_3':
                case 'NXT_SENSOR_4':
                    return [...LEGO_FEATURES];
                case 'PHIRO_BOTTOM_LEFT':
                case 'PHIRO_BOTTOM_RIGHT':
                case 'PHIRO_FRONT_LEFT':
                case 'PHIRO_FRONT_RIGHT':
                case 'PHIRO_SIDE_LEFT':
                case 'PHIRO_SIDE_RIGHT':
                    return [...PHIRO_FEATURES];
            }
            break;
    }
    throw new Error(`No features set for category ${category} formula ${formula}`);
}
