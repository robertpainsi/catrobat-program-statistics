'use strict';

const colors = {
    bluetooth: '26a6ae',
    control: 'f99761',
    data: 'f24e50',
    drone: 'aea626',
    event: 'cf5717',
    lego: 'fccb41',
    looks: '6b9c49',
    motion: '408ac5',
    pen: '305716',
    sounds: '8f4cba',
    userBricks: '98c204',

    sensor: '6b72cc',

    hardware: 'ff0000,' // TODO
};

export function getDisplayInfo() {
    return {
        features: {
            list:
                {name: 'List', color: colors.data},
            variable:
                {name: 'Variable', color: colors.data},
            text:
                {name: 'Text', color: colors.control},
            clone:
                {name: 'Clone', color: colors.control},
            pen:
                {name: 'Pen', color: colors.pen},
            physics:
                {name: 'Physics', color: colors.motion},
            touch:
                {name: 'Touch', color: colors.sensor},
            finger:
                {name: 'Finger', color: colors.sensor},
            faceDetection:
                {name: 'Face detection', color: colors.sensor},
            dateTime:
                {name: 'Date-Time', color: colors.sensor},
            textToSpeech:
                {name: 'Text to speech', color: colors.data},
            cast:
                {name: 'Cast', color: colors.control},
            userBrick:
                {name: 'User Brick', color: colors.userBricks},
            hardware:
                {name: 'Hardware', color: colors.hardware},
            externalHardware:
                {name: 'External hardware', color: colors.hardware},
            internalHardware:
                {name: 'Internal hardware', color: colors.hardware},
            bluetooth:
                {name: 'Bluetooth', color: colors.bluetooth},
            wlan:
                {name: 'WLAN', color: colors.bluetooth},
            nfc:
                {name: 'NFC', color: colors.bluetooth},
            camera:
                {name: 'Camera', color: colors.sensor},
            flash:
                {name: 'Flash', color: colors.sensor},
            location:
                {name: 'Location', color: colors.sensor},
            phoneSensor:
                {name: 'Phone sensor', color: colors.sensor},
            arduino:
                {name: 'Arduino', color: colors.bluetooth},
            drone:
                {name: 'Drone', color: colors.bluetooth},
            lego:
                {name: 'Lego', color: colors.lego},
            phiro:
                {name: 'Phiro', color: colors.lego},
            raspberryPi:
                {name: 'Raspberry Pi', color: colors.bluetooth},
        },
        bricks: {
            // Events
            StartScript:
                {name: 'When program starts', color: colors.event},
            WhenScript:
                {name: 'When tapped', color: colors.event},
            WhenTouchDownScript:
                {name: 'When screen is touched', color: colors.event},
            BroadcastScript:
                {name: 'When you receive', color: colors.event},
            BroadcastBrick:
                {name: 'Broadcast', color: colors.event},
            BroadcastWaitBrick:
                {name: 'Broadcast and Wait', color: colors.event},
            WhenConditionScript:
                {name: 'When _ becomes true', color: colors.event},
            CollisionScript:
                {name: 'When physical collision with', color: colors.event},
            WhenBackgroundChangesScript:
                {name: 'When background changes to', color: colors.event},
            WhenClonedScript:
                {name: 'When I start as a clone', color: colors.event},
            WhenNfcScript:
                {name: 'When NFC', color: colors.event},
            RaspiInterruptScript:
                {name: 'When Raspberry Pi pin changes to', color: colors.event},
            WhenGamepadButtonScript:
                {name: 'When gamepad button', color: colors.event},

            // Control
            WaitBrick:
                {name: 'Wait', color: colors.control},
            NoteBrick:
                {name: 'Note', color: colors.control},
            ForeverBrick:
                {name: 'Forever', color: colors.control},
            LoopEndBrick:
                {name: 'End of Loop', color: colors.control},
            IfLogicBeginBrick:
                {name: 'If', color: colors.control},
            IfLogicElseBrick:
                {name: 'Else', color: colors.control},
            IfLogicEndBrick:
                {name: 'End If', color: colors.control},
            WaitUntilBrick:
                {name: 'Wait until _ is true', color: colors.control},
            RepeatBrick:
                {name: 'Repeat', color: colors.control},
            RepeatUntilBrick:
                {name: 'Repeat until _ is true', color: colors.control},
            SceneStartBrick:
                {name: 'Start scene', color: colors.control},
            SceneTransitionBrick:
                {name: 'Continue scene', color: colors.control},
            PhiroIfLogicBeginBrick:
                {name: 'If Phiro sensor is activated', color: colors.control},
            StopScriptBrick:
                {name: 'Stop script', color: colors.control},
            CloneBrick:
                {name: 'Create clone', color: colors.control},
            DeleteThisCloneBrick:
                {name: 'Delete this clone', color: colors.control},
            SetNfcTagBrick:
                {name: 'Set next NFC tag', color: colors.control},
            RaspiIfLogicBeginBrick:
                {name: 'If Raspberry Pi pin is true', color: colors.control},

            // Motion
            PlaceAtBrick:
                {name: 'Place at', color: colors.motion},
            SetXBrick:
                {name: 'Set X', color: colors.motion},
            SetYBrick:
                {name: 'Set Y', color: colors.motion},
            ChangeXByNBrick:
                {name: 'Change X', color: colors.motion},
            ChangeYByNBrick:
                {name: 'Change Y', color: colors.motion},
            GoToBrick:
                {name: 'Go to', color: colors.motion},
            IfOnEdgeBounceBrick:
                {name: 'If on edge, bounce', color: colors.motion},
            MoveNStepsBrick:
                {name: 'Move _ steps', color: colors.motion},
            TurnLeftBrick:
                {name: 'Turn left', color: colors.motion},
            TurnRightBrick:
                {name: 'Turn right', color: colors.motion},
            PointInDirectionBrick:
                {name: 'Point in direction', color: colors.motion},
            PointToBrick:
                {name: 'Point to', color: colors.motion},
            SetRotationStyleBrick:
                {name: 'Set rotation style', color: colors.motion},
            GlideToBrick:
                {name: 'Glide to', color: colors.motion},
            GoNStepsBackBrick:
                {name: 'Go back _ layers', color: colors.motion},
            ComeToFrontBrick:
                {name: 'Come to front', color: colors.motion},
            VibrationBrick:
                {name: 'Vibrate', color: colors.motion},
            SetPhysicsObjectTypeBrick:
                {name: 'Set motion type', color: colors.motion},
            SetVelocityBrick:
                {name: 'Set velocity', color: colors.motion},
            TurnLeftSpeedBrick:
                {name: 'Rotate left speed', color: colors.motion},
            TurnRightSpeedBrick:
                {name: 'Rotate right speed', color: colors.motion},
            SetGravityBrick:
                {name: 'Set gravity', color: colors.motion},
            SetMassBrick:
                {name: 'Set mass', color: colors.motion},
            SetBounceBrick:
                {name: 'Set bounce factor', color: colors.motion},
            SetFrictionBrick:
                {name: 'Set friction', color: colors.motion},

            // Sounds
            PlaySoundBrick:
                {name: 'Start sound', color: colors.sounds},
            PlaySoundAndWaitBrick:
                {name: 'Start sound and wait', color: colors.sounds},
            StopAllSoundsBrick:
                {name: 'Stop all sounds', color: colors.sounds},
            SetVolumeToBrick:
                {name: 'Set volume', color: colors.sounds},
            ChangeVolumeByNBrick:
                {name: 'Change volume', color: colors.sounds},
            SpeakBrick:
                {name: 'Speak', color: colors.sounds},
            SpeakAndWaitBrick:
                {name: 'Speak and wait', color: colors.sounds},
            PhiroPlayToneBrick:
                {name: 'Play Phiro music tone', color: colors.sounds},
            AskSpeechBrick:
                {name: 'Ask speech', color: colors.sounds},

            // Looks
            SetLookBrick:
                {name: 'Switch to look', color: colors.looks},
            SetLookByIndexBrick:
                {name: 'Switch to look #', color: colors.looks},
            NextLookBrick:
                {name: 'Next look', color: colors.looks},
            PreviousLookBrick:
                {name: 'Previous look', color: colors.looks},
            SetSizeToBrick:
                {name: 'Set size', color: colors.looks},
            ChangeSizeByNBrick:
                {name: 'Change size', color: colors.looks},
            HideBrick:
                {name: 'Hide', color: colors.looks},
            ShowBrick:
                {name: 'Show', color: colors.looks},
            AskBrick:
                {name: 'Ask', color: colors.looks},
            SayBubbleBrick:
                {name: 'Say', color: colors.looks},
            SayForBubbleBrick:
                {name: 'Say for _ seconds', color: colors.looks},
            ThinkBubbleBrick:
                {name: 'Think', color: colors.looks},
            ThinkForBubbleBrick:
                {name: 'Think for _ seconds', color: colors.looks},
            SetTransparencyBrick:
                {name: 'Set transparency', color: colors.looks},
            ChangeTransparencyByNBrick:
                {name: 'Change transparency', color: colors.looks},
            SetBrightnessBrick:
                {name: 'Set brightness', color: colors.looks},
            ChangeBrightnessByNBrick:
                {name: 'Change brightness', color: colors.looks},
            SetColorBrick:
                {name: 'Set color', color: colors.looks},
            ChangeColorByNBrick:
                {name: 'Change color', color: colors.looks},
            ClearBackgroundBrick:
                {name: 'Clear graphic effects', color: colors.looks},
            SetBackgroundBrick:
                {name: 'Switch background', color: colors.looks},
            SetBackgroundAndWaitBrick:
                {name: 'Switch background and wait', color: colors.looks},
            SetBackgroundByIndexBrick:
                {name: 'Switch background to #', color: colors.looks},
            SetBackgroundByIndexAndWaitBrick:
                {name: 'Switch background to # and wait', color: colors.looks},
            CameraBrick:
                {name: 'Turn camera on/off', color: colors.looks},
            ChooseCameraBrick:
                {name: 'Use front/back camera', color: colors.looks},
            FlashBrick:
                {name: 'Turn flashlight', color: colors.looks},
            PhiroRGBLightBrick:
                {name: 'Set Phiro light', color: colors.looks},

            // Pen
            PenDownBrick:
                {name: 'Pen down', color: colors.pen},
            PenUpBrick:
                {name: 'Pen up', color: colors.pen},
            SetPenSizeBrick:
                {name: 'Set pen size', color: colors.pen},
            SetPenColorBrick:
                {name: 'Set pen color', color: colors.pen},
            StampBrick:
                {name: 'Stamp', color: colors.pen},
            ClearGraphicEffectBrick:
                {name: 'Clear', color: colors.pen},

            // Data
            SetVariableBrick:
                {name: 'Set variable', color: colors.data},
            ChangeVariableBrick:
                {name: 'Change variable', color: colors.data},
            ShowTextBrick:
                {name: 'Show variable', color: colors.data},
            HideTextBrick:
                {name: 'Hide variable', color: colors.data},
            AddItemToUserListBrick:
                {name: 'Add to list', color: colors.data},
            DeleteItemOfUserListBrick:
                {name: 'Delete from list', color: colors.data},
            InsertItemIntoUserListBrick:
                {name: 'Insert into list', color: colors.data},
            ReplaceItemInUserListBrick:
                {name: 'Replace in list', color: colors.data},

            // Lego
            LegoNxtMotorMoveBrick:
                {name: 'Move NXT motor', color: colors.lego},
            LegoNxtMotorStopBrick:
                {name: 'Stop NXT motor', color: colors.lego},
            LegoNxtMotorTurnAngleBrick:
                {name: 'Turn NXT motor', color: colors.lego},
            LegoNxtPlayToneBrick:
                {name: 'Play NXT tone', color: colors.lego},
            LegoEv3MotorTurnAngleBrick:
                {name: 'Turn EV3 motor', color: colors.lego},
            LegoEv3MotorMoveBrick:
                {name: 'Move EV3 motor', color: colors.lego},
            LegoEv3MotorStopBrick:
                {name: 'Stop EV3 motor', color: colors.lego},
            LegoEv3PlayToneBrick:
                {name: 'Play EV3 tone', color: colors.lego},
            LegoEv3SetLedBrick:
                {name: 'Set EV3 LED Status', color: colors.lego},

            // User bricks
            UserBrick:
                {name: 'My bricks', color: colors.userBricks},

            // Drone
            DroneTakeOffLandBrick:
                {name: 'Take off / Land', color: colors.drone},
            DroneFlipBrick:
                {name: 'Flip', color: colors.drone},
            DroneEmergencyBrick:
                {name: 'Emergency', color: colors.drone},
            DroneMoveUpBrick:
                {name: 'Move up', color: colors.drone},
            DroneMoveDownBrick:
                {name: 'Move down', color: colors.drone},
            DroneMoveLeftBrick:
                {name: 'Move left', color: colors.drone},
            DroneMoveRightBrick:
                {name: 'Move right', color: colors.drone},
            DroneMoveForwardBrick:
                {name: 'Move forward', color: colors.drone},
            DroneMoveBackwardBrick:
                {name: 'Move backward', color: colors.drone},
            DroneTurnLeftBrick:
                {name: 'Turn left', color: colors.drone},
            DroneTurnRightBrick:
                {name: 'Turn right', color: colors.drone},
            DroneSwitchCameraBrick:
                {name: 'Switch drone camera', color: colors.drone},
            DroneTurnLeftMagnetoBrick:
                {name: 'Turn left magneto', color: colors.drone},
            DroneTurnRightMagnetoBrick:
                {name: 'Turn right magneto', color: colors.drone},
            DronePlayLedAnimationBrick:
                {name: 'Play LED animation', color: colors.drone},

            // Bluetooth
            PhiroMotorMoveBackwardBrick:
                {name: 'Move Phiro motor backward', color: colors.bluetooth},
            PhiroMotorMoveForwardBrick:
                {name: 'Move Phiro motor forward', color: colors.bluetooth},
            PhiroMotorStopBrick:
                {name: 'Stop Phiro motor', color: colors.bluetooth},
            ArduinoSendDigitalValueBrick:
                {name: 'Set Arduino digital pin', color: colors.bluetooth},
            ArduinoSendPWMValueBrick:
                {name: 'Set Arduino PWM~ pin', color: colors.bluetooth},
            RaspiPwmBrick:
                {name: 'Set Raspberry Pi PWM pin', color: colors.bluetooth},
            RaspiSendDigitalValueBrick:
                {name: 'Set Raspberry Pi pin', color: colors.bluetooth},
        },
        formulas: {
            NUMBER:
                {name: 'Number', color: colors.control},
            STRING:
                {name: 'Text', color: colors.control},
            BRACKET:
                {name: '()', color: colors.control},
            USER_LIST:
                {name: 'List', color: colors.data},
            USER_VARIABLE:
                {name: 'Variable', color: colors.data},
            COLLISION_FORMULA:
                {name: 'touches_object', color: colors.event},

            FUNCTION_ABS:
                {name: 'abs', color: colors.control},
            FUNCTION_ARCCOS:
                {name: 'arccos', color: colors.control},
            FUNCTION_ARCSIN:
                {name: 'arcsin', color: colors.control},
            FUNCTION_ARCTAN:
                {name: 'arctan', color: colors.control},
            FUNCTION_CEIL:
                {name: 'ceil', color: colors.control},
            FUNCTION_COS:
                {name: 'cos', color: colors.control},
            FUNCTION_EXP:
                {name: 'exp', color: colors.control},
            FUNCTION_FALSE:
                {name: 'FALSE', color: colors.control},
            FUNCTION_FLOOR:
                {name: 'floor', color: colors.control},
            FUNCTION_LN:
                {name: 'ln', color: colors.control},
            FUNCTION_LOG:
                {name: 'log', color: colors.control},
            FUNCTION_MAX:
                {name: 'max', color: colors.control},
            FUNCTION_MIN:
                {name: 'min', color: colors.control},
            FUNCTION_MOD:
                {name: 'mod', color: colors.control},
            FUNCTION_PI:
                {name: 'PI', color: colors.control},
            FUNCTION_POWER:
                {name: 'power', color: colors.control},
            FUNCTION_RAND:
                {name: 'rand', color: colors.control},
            FUNCTION_ROUND:
                {name: 'round', color: colors.control},
            FUNCTION_SIN:
                {name: 'sin', color: colors.control},
            FUNCTION_SQRT:
                {name: 'sqrt', color: colors.control},
            FUNCTION_TAN:
                {name: 'tan', color: colors.control},
            FUNCTION_TRUE:
                {name: 'TRUE', color: colors.control},
            FUNCTION_JOIN:
                {name: 'join', color: colors.control},
            FUNCTION_LENGTH:
                {name: 'length', color: colors.control},
            FUNCTION_LETTER:
                {name: 'letter', color: colors.control},
            FUNCTION_CONTAINS:
                {name: 'contains', color: colors.data},
            FUNCTION_LIST_ITEM:
                {name: 'element', color: colors.data},
            FUNCTION_NUMBER_OF_ITEMS:
                {name: 'number_of_items', color: colors.data},
            FUNCTION_MULTI_FINGER_TOUCHED:
                {name: 'screen_is_touched', color: colors.sensor},
            FUNCTION_MULTI_FINGER_X:
                {name: 'screen_touch_x', color: colors.sensor},
            FUNCTION_MULTI_FINGER_Y:
                {name: 'screen_touch_y', color: colors.sensor},
            FUNCTION_ARDUINOANALOG:
                {name: 'arduino_analog_pin', color: colors.bluetooth},
            FUNCTION_ARDUINODIGITAL:
                {name: 'arduino_digital_pin', color: colors.bluetooth},
            FUNCTION_RASPIDIGITAL:
                {name: 'raspberry_pi_pin', color: colors.bluetooth},
            OPERATOR_DIVIDE:
                {name: '÷', color: colors.control},
            OPERATOR_EQUAL:
                {name: '=', color: colors.control},
            OPERATOR_GREATER_OR_EQUAL:
                {name: '≥', color: colors.control},
            OPERATOR_GREATER_THAN:
                {name: '>', color: colors.control},
            OPERATOR_LOGICAL_AND:
                {name: 'AND', color: colors.control},
            OPERATOR_LOGICAL_NOT:
                {name: 'NOT', color: colors.control},
            OPERATOR_LOGICAL_OR:
                {name: 'OR', color: colors.control},
            OPERATOR_MINUS:
                {name: '-', color: colors.control},
            OPERATOR_MULT:
                {name: '×', color: colors.control},
            OPERATOR_NOT_EQUAL:
                {name: '≠', color: colors.control},
            OPERATOR_PLUS:
                {name: '+', color: colors.control},
            OPERATOR_SMALLER_OR_EQUAL:
                {name: '≤', color: colors.control},
            OPERATOR_SMALLER_THAN:
                {name: '<', color: colors.control},
            SENSOR_LOUDNESS:
                {name: 'loudness', color: colors.sounds},
            SENSOR_OBJECT_BACKGROUND_NAME:
                {name: 'background_name', color: colors.looks},
            SENSOR_OBJECT_BACKGROUND_NUMBER:
                {name: 'background_number', color: colors.looks},
            SENSOR_OBJECT_BRIGHTNESS:
                {name: 'brightness', color: colors.looks},
            SENSOR_OBJECT_COLOR:
                {name: 'color', color: colors.looks},
            SENSOR_OBJECT_LAYER:
                {name: 'layer', color: colors.motion},
            SENSOR_OBJECT_LOOK_NAME:
                {name: 'look_name', color: colors.looks},
            SENSOR_OBJECT_LOOK_NUMBER:
                {name: 'look_number', color: colors.looks},
            SENSOR_OBJECT_ROTATION:
                {name: 'rotation', color: colors.motion},
            SENSOR_OBJECT_SIZE:
                {name: 'size', color: colors.looks},
            SENSOR_OBJECT_TRANSPARENCY:
                {name: 'transparency', color: colors.looks},
            SENSOR_OBJECT_X:
                {name: 'position_x', color: colors.motion},
            SENSOR_OBJECT_Y:
                {name: 'position_y', color: colors.motion},
            SENSOR_OBJECT_DISTANCE_TO:
                {name: 'distance_to', color: colors.motion},
            SENSOR_OBJECT_ANGULAR_VELOCITY:
                {name: 'angular_velocity', color: colors.motion},
            SENSOR_OBJECT_X_VELOCITY:
                {name: 'x_velocity', color: colors.motion},
            SENSOR_OBJECT_Y_VELOCITY:
                {name: 'y_velocity', color: colors.motion},
            SENSOR_COLLIDES_WITH_EDGE:
                {name: 'touches_edge', color: colors.event},
            SENSOR_COLLIDES_WITH_FINGER:
                {name: 'touches_finger', color: colors.event},
            SENSOR_FINGER_TOUCHED:
                {name: 'screen_is_touched', color: colors.event},
            SENSOR_FINGER_X:
                {name: 'screen_touch_x', color: colors.sensor},
            SENSOR_FINGER_Y:
                {name: 'screen_touch_y', color: colors.sensor},
            SENSOR_LAST_FINGER_INDEX:
                {name: 'last_screen_touch_index', color: colors.sensor},
            SENSOR_DATE_DAY:
                {name: 'day', color: colors.sensor},
            SENSOR_DATE_MONTH:
                {name: 'month', color: colors.sensor},
            SENSOR_DATE_WEEKDAY:
                {name: 'weekday', color: colors.sensor},
            SENSOR_DATE_YEAR:
                {name: 'year', color: colors.sensor},
            SENSOR_TIME_HOUR:
                {name: 'hour', color: colors.sensor},
            SENSOR_TIME_MINUTE:
                {name: 'minute', color: colors.sensor},
            SENSOR_TIME_SECOND:
                {name: 'second', color: colors.sensor},
            SENSOR_FACE_DETECTED:
                {name: 'face_is_visible', color: colors.sensor},
            SENSOR_FACE_SIZE:
                {name: 'face_size', color: colors.sensor},
            SENSOR_FACE_X_POSITION:
                {name: 'face_x_position', color: colors.sensor},
            SENSOR_FACE_Y_POSITION:
                {name: 'face_y_position', color: colors.sensor},
            SENSOR_X_ACCELERATION:
                {name: 'acceleration_x', color: colors.sensor},
            SENSOR_X_INCLINATION:
                {name: 'inclination_x', color: colors.sensor},
            SENSOR_Y_ACCELERATION:
                {name: 'acceleration_y', color: colors.sensor},
            SENSOR_Y_INCLINATION:
                {name: 'inclination_y', color: colors.sensor},
            SENSOR_Z_ACCELERATION:
                {name: 'acceleration_z', color: colors.sensor},
            SENSOR_ALTITUDE:
                {name: 'altitude', color: colors.sensor},
            SENSOR_LONGITUDE:
                {name: 'longitude', color: colors.sensor},
            SENSOR_COMPASS_DIRECTION:
                {name: 'compass_direction', color: colors.sensor},
            SENSOR_LATITUDE:
                {name: 'latitude', color: colors.sensor},
            SENSOR_LOCATION_ACCURACY:
                {name: 'location_accuracy', color: colors.sensor},
            SENSOR_DRONE_BATTERY_STATUS:
                {name: 'drone_battery_status', color: colors.drone},
            SENSOR_EV3_SENSOR_1:
                {name: 'EV3_sensor_1', color: colors.lego},
            SENSOR_EV3_SENSOR_3:
                {name: 'EV3_sensor_3', color: colors.lego},
            SENSOR_EV3_SENSOR_4:
                {name: 'EV3_sensor_4', color: colors.lego},
            SENSOR_NXT_SENSOR_1:
                {name: 'NXT_sensor_1', color: colors.lego},
            SENSOR_NXT_SENSOR_2:
                {name: 'NXT_sensor_2', color: colors.lego},
            SENSOR_NXT_SENSOR_3:
                {name: 'NXT_sensor_3', color: colors.lego},
            SENSOR_NXT_SENSOR_4:
                {name: 'NXT_sensor_4', color: colors.lego},
            SENSOR_PHIRO_BOTTOM_LEFT:
                {name: 'phiro_bottom_left', color: colors.bluetooth},
            SENSOR_PHIRO_BOTTOM_RIGHT:
                {name: 'phiro_bottom_right', color: colors.bluetooth},
            SENSOR_PHIRO_FRONT_LEFT:
                {name: 'phiro_front_left', color: colors.bluetooth},
            SENSOR_PHIRO_FRONT_RIGHT:
                {name: 'phiro_front_right', color: colors.bluetooth},
            SENSOR_PHIRO_SIDE_LEFT:
                {name: 'phiro_side_left', color: colors.bluetooth},
            SENSOR_PHIRO_SIDE_RIGHT:
                {name: 'phiro_side_right', color: colors.bluetooth},
        }
    }
}
