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
    hardware: 'ff0000,',
};

const features = {
    list: 'list',
    variable: 'variable',
    text: 'text',
    clone: 'clone',
    pen: 'pen',
    physics: 'physics',
    touch: 'touch',
    finger: 'finger',
    faceDetection: 'faceDetection',
    dateTime: 'dateTime',
    speech: 'textToSpeech',
    cast: 'cast',
    userBrick: 'userBrick',

    hardware: 'hardware',
    externalHardware: 'externalHardware',
    internalHardware: 'internalHardware',
    bluetooth: 'bluetooth',
    wlan: 'wlan',
    nfc: 'nfc',

    camera: 'camera',
    flash: 'flash',
    location: 'location',
    phoneSensor: 'phoneSensor',

    arduino: 'arduino',
    drone: 'drone',
    lego: 'lego',
    phiro: 'phiro',
    raspberryPi: 'raspberryPi',
};

export const featureGroups = {
    variable: [features.variable],
    list: [features.list],
    text: [features.text],
    pen: [features.pen],
    clone: [features.clone],
    physics: [features.physics],
    touch: [features.touch],
    finger: [features.finger],
    dateTime: [features.dateTime],
    speech: [features.speech],
    userBrick: [features.userBrick],

    phoneSensor: [features.phoneSensor, features.internalHardware, features.hardware],
    camera: [features.camera, features.internalHardware, features.hardware],
    flash: [features.flash, features.internalHardware, features.hardware],
    faceDetection: [features.faceDetection, features.internalHardware, features.hardware],
    nfc: [features.nfc, features.internalHardware, features.hardware],
    location: [features.location, features.internalHardware, features.hardware],

    arduino: [features.arduino, features.bluetooth, features.externalHardware, features.hardware],
    cast: [features.cast, features.wlan, features.externalHardware, features.hardware],
    drone: [features.drone, features.wlan, features.externalHardware, features.hardware],
    lego: [features.lego, features.bluetooth, features.wlan, features.externalHardware, features.hardware],
    phiro: [features.phiro, features.bluetooth, features.externalHardware, features.hardware],
    raspberryPi: [features.raspberryPi, features.wlan, features.externalHardware, features.hardware],
};

const info = {
    features: {
        list: {
            name: 'List',
            color: colors.data,
        },
        variable: {
            name: 'Variable',
            color: colors.data,
        },
        text: {
            name: 'Text',
            color: colors.control,
        },
        clone: {
            name: 'Clone',
            color: colors.control,
        },
        pen: {
            name: 'Pen',
            color: colors.pen,
        },
        physics: {
            name: 'Physics',
            color: colors.motion,
        },
        touch: {
            name: 'Touch',
            color: colors.sensor,
        },
        finger: {
            name: 'Finger',
            color: colors.sensor,
        },
        faceDetection: {
            name: 'Face detection',
            color: colors.sensor,
        },
        dateTime: {
            name: 'Date-Time',
            color: colors.sensor,
        },
        textToSpeech: {
            name: 'Text to speech',
            color: colors.data,
        },
        cast: {
            name: 'Cast',
            color: colors.control,
        },
        userBrick: {
            name: 'User Brick',
            color: colors.userBricks,
        },
        hardware: {
            name: 'Hardware',
            color: colors.hardware,
        },
        externalHardware: {
            name: 'External hardware',
            color: colors.hardware,
        },
        internalHardware: {
            name: 'Internal hardware',
            color: colors.hardware,
        },
        bluetooth: {
            name: 'Bluetooth',
            color: colors.bluetooth,
        },
        wlan: {
            name: 'WLAN',
            color: colors.bluetooth,
        },
        nfc: {
            name: 'NFC',
            color: colors.bluetooth,
        },
        camera: {
            name: 'Camera',
            color: colors.sensor,
        },
        flash: {
            name: 'Flash',
            color: colors.sensor,
        },
        location: {
            name: 'Location',
            color: colors.sensor,
        },
        phoneSensor: {
            name: 'Phone sensor',
            color: colors.sensor,
        },
        arduino: {
            name: 'Arduino',
            color: colors.bluetooth,
        },
        drone: {
            name: 'Drone',
            color: colors.bluetooth,
        },
        lego: {
            name: 'Lego',
            color: colors.lego,
        },
        phiro: {
            name: 'Phiro',
            color: colors.lego,
        },
        raspberryPi: {
            name: 'Raspberry Pi',
            color: colors.bluetooth,
        },
    },
    bricks: {
        // Events
        StartScript: {
            name: 'When program starts',
            color: colors.event,
            features: [],
        },
        WhenScript: {
            name: 'When tapped',
            color: colors.event,
            features: [],
        },
        WhenTouchDownScript: {
            name: 'When screen is touched',
            color: colors.event,
            features: [],
        },
        BroadcastScript: {
            name: 'When you receive',
            color: colors.event,
            features: [],
        },
        BroadcastBrick: {
            name: 'Broadcast',
            color: colors.event,
            features: [],
        },
        BroadcastWaitBrick: {
            name: 'Broadcast and Wait',
            color: colors.event,
            features: [],
        },
        WhenConditionScript: {
            name: 'When _ becomes true',
            color: colors.event,
            features: [],
        },
        CollisionScript: {
            name: 'When physical collision with',
            color: colors.event,
            features: [...featureGroups.physics],
        },
        WhenBackgroundChangesScript: {
            name: 'When background changes to',
            color: colors.event,
            features: [],
        },
        WhenClonedScript: {
            name: 'When I start as a clone',
            color: colors.event,
            features: [...featureGroups.clone],
        },
        WhenNfcScript: {
            name: 'When NFC',
            color: colors.event,
            features: [...featureGroups.nfc],
        },
        RaspiInterruptScript: {
            name: 'When Raspberry Pi pin changes to',
            color: colors.event,
            features: [...featureGroups.raspberryPi],
        },
        WhenGamepadButtonScript: {
            name: 'When gamepad button',
            color: colors.event,
            features: [...featureGroups.cast],
        },

        // Control
        WaitBrick: {
            name: 'Wait',
            color: colors.control,
            features: [],
        },
        NoteBrick: {
            name: 'Note',
            color: colors.control,
            features: [],
        },
        ForeverBrick: {
            name: 'Forever',
            color: colors.control,
            features: [],
        },
        LoopEndBrick: {
            name: 'End of Loop',
            color: colors.control,
            features: [],
        },
        IfLogicBeginBrick: {
            name: 'If',
            color: colors.control,
            features: [],
        },
        IfLogicElseBrick: {
            name: 'Else',
            color: colors.control,
            features: [],
        },
        IfLogicEndBrick: {
            name: 'End If',
            color: colors.control,
            features: [],
        },
        WaitUntilBrick: {
            name: 'Wait until _ is true',
            color: colors.control,
            features: [],
        },
        RepeatBrick: {
            name: 'Repeat',
            color: colors.control,
            features: [],
        },
        RepeatUntilBrick: {
            name: 'Repeat until _ is true',
            color: colors.control,
            features: [],
        },
        SceneStartBrick: {
            name: 'Start scene',
            color: colors.control,
            features: [],
        },
        SceneTransitionBrick: {
            name: 'Continue scene',
            color: colors.control,
            features: [],
        },
        PhiroIfLogicBeginBrick: {
            name: 'If Phiro sensor is activated',
            color: colors.control,
            features: [...featureGroups.phiro],
        },
        StopScriptBrick: {
            name: 'Stop script',
            color: colors.control,
            features: [],
        },
        CloneBrick: {
            name: 'Create clone',
            color: colors.control,
            features: [...featureGroups.clone],
        },
        DeleteThisCloneBrick: {
            name: 'Delete this clone',
            color: colors.control,
            features: [...featureGroups.clone],
        },
        SetNfcTagBrick: {
            name: 'Set next NFC tag',
            color: colors.control,
            features: [...featureGroups.nfc],
        },
        RaspiIfLogicBeginBrick: {
            name: 'If Raspberry Pi pin is true',
            color: colors.control,
            features: [...featureGroups.raspberryPi],
        },

        // Motion
        PlaceAtBrick: {
            name: 'Place at',
            color: colors.motion,
            features: [],
        },
        SetXBrick: {
            name: 'Set X',
            color: colors.motion,
            features: [],
        },
        SetYBrick: {
            name: 'Set Y',
            color: colors.motion,
            features: [],
        },
        ChangeXByNBrick: {
            name: 'Change X',
            color: colors.motion,
            features: [],
        },
        ChangeYByNBrick: {
            name: 'Change Y',
            color: colors.motion,
            features: [],
        },
        GoToBrick: {
            name: 'Go to',
            color: colors.motion,
            features: [],
        },
        IfOnEdgeBounceBrick: {
            name: 'If on edge, bounce',
            color: colors.motion,
            features: [],
        },
        MoveNStepsBrick: {
            name: 'Move _ steps',
            color: colors.motion,
            features: [],
        },
        TurnLeftBrick: {
            name: 'Turn left',
            color: colors.motion,
            features: [],
        },
        TurnRightBrick: {
            name: 'Turn right',
            color: colors.motion,
            features: [],
        },
        PointInDirectionBrick: {
            name: 'Point in direction',
            color: colors.motion,
            features: [],
        },
        PointToBrick: {
            name: 'Point to',
            color: colors.motion,
            features: [],
        },
        SetRotationStyleBrick: {
            name: 'Set rotation style',
            color: colors.motion,
            features: [],
        },
        GlideToBrick: {
            name: 'Glide to',
            color: colors.motion,
            features: [],
        },
        GoNStepsBackBrick: {
            name: 'Go back _ layers',
            color: colors.motion,
            features: [],
        },
        ComeToFrontBrick: {
            name: 'Come to front',
            color: colors.motion,
            features: [],
        },
        VibrationBrick: {
            name: 'Vibrate',
            color: colors.motion,
            features: [],
        },
        SetPhysicsObjectTypeBrick: {
            name: 'Set motion type',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        SetVelocityBrick: {
            name: 'Set velocity',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        TurnLeftSpeedBrick: {
            name: 'Rotate left speed',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        TurnRightSpeedBrick: {
            name: 'Rotate right speed',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        SetGravityBrick: {
            name: 'Set gravity',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        SetMassBrick: {
            name: 'Set mass',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        SetBounceBrick: {
            name: 'Set bounce factor',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        SetFrictionBrick: {
            name: 'Set friction',
            color: colors.motion,
            features: [...featureGroups.physics],
        },

        // Sounds
        PlaySoundBrick: {
            name: 'Start sound',
            color: colors.sounds,
            features: [],
        },
        PlaySoundAndWaitBrick: {
            name: 'Start sound and wait',
            color: colors.sounds,
            features: [],
        },
        StopAllSoundsBrick: {
            name: 'Stop all sounds',
            color: colors.sounds,
            features: [],
        },
        SetVolumeToBrick: {
            name: 'Set volume',
            color: colors.sounds,
            features: [],
        },
        ChangeVolumeByNBrick: {
            name: 'Change volume',
            color: colors.sounds,
            features: [],
        },
        SpeakBrick: {
            name: 'Speak',
            color: colors.sounds,
            features: [],
        },
        SpeakAndWaitBrick: {
            name: 'Speak and wait',
            color: colors.sounds,
            features: [],
        },
        PhiroPlayToneBrick: {
            name: 'Play Phiro music tone',
            color: colors.sounds,
            features: [...featureGroups.phiro],
        },
        AskSpeechBrick: {
            name: 'Ask speech',
            color: colors.sounds,
            features: [...featureGroups.variable, ...featureGroups.speech],
        },

        // Looks
        SetLookBrick: {
            name: 'Switch to look',
            color: colors.looks,
            features: [],
        },
        SetLookByIndexBrick: {
            name: 'Switch to look #',
            color: colors.looks,
            features: [],
        },
        NextLookBrick: {
            name: 'Next look',
            color: colors.looks,
            features: [],
        },
        PreviousLookBrick: {
            name: 'Previous look',
            color: colors.looks,
            features: [],
        },
        SetSizeToBrick: {
            name: 'Set size',
            color: colors.looks,
            features: [],
        },
        ChangeSizeByNBrick: {
            name: 'Change size',
            color: colors.looks,
            features: [],
        },
        HideBrick: {
            name: 'Hide',
            color: colors.looks,
            features: [],
        },
        ShowBrick: {
            name: 'Show',
            color: colors.looks,
            features: [],
        },
        AskBrick: {
            name: 'Ask',
            color: colors.looks,
            features: [...featureGroups.variable],
        },
        SayBubbleBrick: {
            name: 'Say',
            color: colors.looks,
            features: [],
        },
        SayForBubbleBrick: {
            name: 'Say for _ seconds',
            color: colors.looks,
            features: [],
        },
        ThinkBubbleBrick: {
            name: 'Think',
            color: colors.looks,
            features: [],
        },
        ThinkForBubbleBrick: {
            name: 'Think for _ seconds',
            color: colors.looks,
            features: [],
        },
        SetTransparencyBrick: {
            name: 'Set transparency',
            color: colors.looks,
            features: [],
        },
        ChangeTransparencyByNBrick: {
            name: 'Change transparency',
            color: colors.looks,
            features: [],
        },
        SetBrightnessBrick: {
            name: 'Set brightness',
            color: colors.looks,
            features: [],
        },
        ChangeBrightnessByNBrick: {
            name: 'Change brightness',
            color: colors.looks,
            features: [],
        },
        SetColorBrick: {
            name: 'Set color',
            color: colors.looks,
            features: [],
        },
        ChangeColorByNBrick: {
            name: 'Change color',
            color: colors.looks,
            features: [],
        },
        ClearBackgroundBrick: {
            name: 'Clear graphic effects',
            color: colors.looks,
            features: [...featureGroups.pen],
        },
        SetBackgroundBrick: {
            name: 'Switch background',
            color: colors.looks,
            features: [],
        },
        SetBackgroundAndWaitBrick: {
            name: 'Switch background and wait',
            color: colors.looks,
            features: [],
        },
        SetBackgroundByIndexBrick: {
            name: 'Switch background to #',
            color: colors.looks,
            features: [],
        },
        SetBackgroundByIndexAndWaitBrick: {
            name: 'Switch background to # and wait',
            color: colors.looks,
            features: [],
        },
        CameraBrick: {
            name: 'Turn camera on/off',
            color: colors.looks,
            features: [...featureGroups.camera],
        },
        ChooseCameraBrick: {
            name: 'Use front/back camera',
            color: colors.looks,
            features: [...featureGroups.camera],
        },
        FlashBrick: {
            name: 'Turn flashlight',
            color: colors.looks,
            features: [...featureGroups.flash],
        },
        PhiroRGBLightBrick: {
            name: 'Set Phiro light',
            color: colors.looks,
            features: [...featureGroups.phiro],
        },

        // Pen
        PenDownBrick: {
            name: 'Pen down',
            color: colors.pen,
            features: [...featureGroups.pen],
        },
        PenUpBrick: {
            name: 'Pen up',
            color: colors.pen,
            features: [...featureGroups.pen],
        },
        SetPenSizeBrick: {
            name: 'Set pen size',
            color: colors.pen,
            features: [...featureGroups.pen],
        },
        SetPenColorBrick: {
            name: 'Set pen color',
            color: colors.pen,
            features: [...featureGroups.pen],
        },
        StampBrick: {
            name: 'Stamp',
            color: colors.pen,
            features: [],
        },
        ClearGraphicEffectBrick: {
            name: 'Clear',
            color: colors.pen,
            features: [],
        },

        // Data
        SetVariableBrick: {
            name: 'Set variable',
            color: colors.data,
            features: [...featureGroups.variable],
        },
        ChangeVariableBrick: {
            name: 'Change variable',
            color: colors.data,
            features: [...featureGroups.variable],
        },
        ShowTextBrick: {
            name: 'Show variable',
            color: colors.data,
            features: [],
        },
        HideTextBrick: {
            name: 'Hide variable',
            color: colors.data,
            features: [],
        },
        AddItemToUserListBrick: {
            name: 'Add to list',
            color: colors.data,
            features: [...featureGroups.list],
        },
        DeleteItemOfUserListBrick: {
            name: 'Delete from list',
            color: colors.data,
            features: [...featureGroups.list],
        },
        InsertItemIntoUserListBrick: {
            name: 'Insert into list',
            color: colors.data,
            features: [...featureGroups.list],
        },
        ReplaceItemInUserListBrick: {
            name: 'Replace in list',
            color: colors.data,
            features: [...featureGroups.list],
        },

        // Lego
        LegoNxtMotorMoveBrick: {
            name: 'Move NXT motor',
            color: colors.lego,
            features: [...featureGroups.lego],
        },
        LegoNxtMotorStopBrick: {
            name: 'Stop NXT motor',
            color: colors.lego,
            features: [...featureGroups.lego],
        },
        LegoNxtMotorTurnAngleBrick: {
            name: 'Turn NXT motor',
            color: colors.lego,
            features: [...featureGroups.lego],
        },
        LegoNxtPlayToneBrick: {
            name: 'Play NXT tone',
            color: colors.lego,
            features: [...featureGroups.lego],
        },
        LegoEv3MotorTurnAngleBrick: {
            name: 'Turn EV3 motor',
            color: colors.lego,
            features: [...featureGroups.lego],
        },
        LegoEv3MotorMoveBrick: {
            name: 'Move EV3 motor',
            color: colors.lego,
            features: [...featureGroups.lego],
        },
        LegoEv3MotorStopBrick: {
            name: 'Stop EV3 motor',
            color: colors.lego,
            features: [...featureGroups.lego],
        },
        LegoEv3PlayToneBrick: {
            name: 'Play EV3 tone',
            color: colors.lego,
            features: [...featureGroups.lego],
        },
        LegoEv3SetLedBrick: {
            name: 'Set EV3 LED Status',
            color: colors.lego,
            features: [...featureGroups.lego],
        },

        // User bricks
        UserBrick: {
            name: 'My bricks',
            color: colors.userBricks,
            features: [...featureGroups.userBrick],
        },

        // Drone
        DroneTakeOffLandBrick: {
            name: 'Take off / Land',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneFlipBrick: {
            name: 'Flip',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneEmergencyBrick: {
            name: 'Emergency',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveUpBrick: {
            name: 'Move up',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveDownBrick: {
            name: 'Move down',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveLeftBrick: {
            name: 'Move left',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveRightBrick: {
            name: 'Move right',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveForwardBrick: {
            name: 'Move forward',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveBackwardBrick: {
            name: 'Move backward',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneTurnLeftBrick: {
            name: 'Turn left',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneTurnRightBrick: {
            name: 'Turn right',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneSwitchCameraBrick: {
            name: 'Switch drone camera',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneTurnLeftMagnetoBrick: {
            name: 'Turn left magneto',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneTurnRightMagnetoBrick: {
            name: 'Turn right magneto',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DronePlayLedAnimationBrick: {
            name: 'Play LED animation',
            color: colors.drone,
            features: [...featureGroups.drone],
        },

        // Bluetooth
        PhiroMotorMoveBackwardBrick: {
            name: 'Move Phiro motor backward',
            color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        PhiroMotorMoveForwardBrick: {
            name: 'Move Phiro motor forward',
            color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        PhiroMotorStopBrick: {
            name: 'Stop Phiro motor',
            color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        ArduinoSendDigitalValueBrick: {
            name: 'Set Arduino digital pin',
            color: colors.bluetooth,
            features: [...featureGroups.arduino],
        },
        ArduinoSendPWMValueBrick: {
            name: 'Set Arduino PWM~ pin',
            color: colors.bluetooth,
            features: [...featureGroups.arduino],
        },
        RaspiPwmBrick: {
            name: 'Set Raspberry Pi PWM pin',
            color: colors.bluetooth,
            features: [...featureGroups.raspberryPi],
        },
        RaspiSendDigitalValueBrick: {
            name: 'Set Raspberry Pi pin',
            color: colors.bluetooth,
            features: [...featureGroups.raspberryPi],
        },
    },
    formulas: {
        NUMBER: {
            name: 'Number',
            color: colors.control,
            features: [],
        },
        STRING: {
            name: 'Text',
            color: colors.control,
            features: [...featureGroups.text],
        },
        BRACKET: {
            name: '()',
            color: colors.control,
            features: [],
        },
        USER_LIST: {
            name: 'List',
            color: colors.data,
            features: [...featureGroups.list],
        },
        USER_VARIABLE: {
            name: 'Variable',
            color: colors.data,
            features: [...featureGroups.variable],
        },
        COLLISION_FORMULA: {
            name: 'touches_object',
            color: colors.event,
            features: [...featureGroups.touch],
        },

        FUNCTION_ABS: {
            name: 'abs',
            color: colors.control,
            features: [],
        },
        FUNCTION_ARCCOS: {
            name: 'arccos',
            color: colors.control,
            features: [],
        },
        FUNCTION_ARCSIN: {
            name: 'arcsin',
            color: colors.control,
            features: [],
        },
        FUNCTION_ARCTAN: {
            name: 'arctan',
            color: colors.control,
            features: [],
        },
        FUNCTION_CEIL: {
            name: 'ceil',
            color: colors.control,
            features: [],
        },
        FUNCTION_COS: {
            name: 'cos',
            color: colors.control,
            features: [],
        },
        FUNCTION_EXP: {
            name: 'exp',
            color: colors.control,
            features: [],
        },
        FUNCTION_FALSE: {
            name: 'FALSE',
            color: colors.control,
            features: [],
        },
        FUNCTION_FLOOR: {
            name: 'floor',
            color: colors.control,
            features: [],
        },
        FUNCTION_LN: {
            name: 'ln',
            color: colors.control,
            features: [],
        },
        FUNCTION_LOG: {
            name: 'log',
            color: colors.control,
            features: [],
        },
        FUNCTION_MAX: {
            name: 'max',
            color: colors.control,
            features: [],
        },
        FUNCTION_MIN: {
            name: 'min',
            color: colors.control,
            features: [],
        },
        FUNCTION_MOD: {
            name: 'mod',
            color: colors.control,
            features: [],
        },
        FUNCTION_PI: {
            name: 'PI',
            color: colors.control,
            features: [],
        },
        FUNCTION_POWER: {
            name: 'power',
            color: colors.control,
            features: [],
        },
        FUNCTION_RAND: {
            name: 'rand',
            color: colors.control,
            features: [],
        },
        FUNCTION_ROUND: {
            name: 'round',
            color: colors.control,
            features: [],
        },
        FUNCTION_SIN: {
            name: 'sin',
            color: colors.control,
            features: [],
        },
        FUNCTION_SQRT: {
            name: 'sqrt',
            color: colors.control,
            features: [],
        },
        FUNCTION_TAN: {
            name: 'tan',
            color: colors.control,
            features: [],
        },
        FUNCTION_TRUE: {
            name: 'TRUE',
            color: colors.control,
            features: [],
        },
        FUNCTION_JOIN: {
            name: 'join',
            color: colors.control,
            features: [...featureGroups.text],
        },
        FUNCTION_REGEX: {
            name: 'regular expression',
            color: colors.control,
            features: [...featureGroups.text],
        },
        FUNCTION_LENGTH: {
            name: 'length',
            color: colors.control,
            features: [...featureGroups.text],
        },
        FUNCTION_LETTER: {
            name: 'letter',
            color: colors.control,
            features: [...featureGroups.text],
        },
        FUNCTION_CONTAINS: {
            name: 'contains',
            color: colors.data,
            features: [...featureGroups.list],
        },
        FUNCTION_LIST_ITEM: {
            name: 'element',
            color: colors.data,
            features: [...featureGroups.list],
        },
        FUNCTION_NUMBER_OF_ITEMS: {
            name: 'number_of_items',
            color: colors.data,
            features: [...featureGroups.list],
        },
        FUNCTION_MULTI_FINGER_TOUCHED: {
            name: 'screen_is_touched',
            color: colors.sensor,
            features: [...featureGroups.finger],
        },
        FUNCTION_MULTI_FINGER_X: {
            name: 'screen_touch_x',
            color: colors.sensor,
            features: [...featureGroups.finger],
        },
        FUNCTION_MULTI_FINGER_Y: {
            name: 'screen_touch_y',
            color: colors.sensor,
            features: [...featureGroups.finger],
        },
        FUNCTION_ARDUINOANALOG: {
            name: 'arduino_analog_pin',
            color: colors.bluetooth,
            features: [...featureGroups.arduino],
        },
        FUNCTION_ARDUINODIGITAL: {
            name: 'arduino_digital_pin', color: colors.bluetooth,
            features: [...featureGroups.arduino],
        },
        FUNCTION_RASPIDIGITAL: {
            name: 'raspberry_pi_pin', color: colors.bluetooth,
            features: [...featureGroups.raspberryPi],
        },
        OPERATOR_DIVIDE: {
            name: '÷', color: colors.control,
            features: [],
        },
        OPERATOR_EQUAL: {
            name: '=', color: colors.control,
            features: [],
        },
        OPERATOR_GREATER_OR_EQUAL: {
            name: '≥', color: colors.control,
            features: [],
        },
        OPERATOR_GREATER_THAN: {
            name: '>', color: colors.control,
            features: [],
        },
        OPERATOR_LOGICAL_AND: {
            name: 'AND', color: colors.control,
            features: [],
        },
        OPERATOR_LOGICAL_NOT: {
            name: 'NOT', color: colors.control,
            features: [],
        },
        OPERATOR_LOGICAL_OR: {
            name: 'OR', color: colors.control,
            features: [],
        },
        OPERATOR_MINUS: {
            name: '-', color: colors.control,
            features: [],
        },
        OPERATOR_MULT: {
            name: '×', color: colors.control,
            features: [],
        },
        OPERATOR_NOT_EQUAL: {
            name: '≠', color: colors.control,
            features: [],
        },
        OPERATOR_PLUS: {
            name: '+', color: colors.control,
            features: [],
        },
        OPERATOR_SMALLER_OR_EQUAL: {
            name: '≤',
            color: colors.control,
            features: [],
        },
        OPERATOR_SMALLER_THAN: {
            name: '<',
            color: colors.control,
            features: [],
        },
        SENSOR_LOUDNESS: {
            name: 'loudness',
            color: colors.sounds,
            features: [],
        },
        SENSOR_OBJECT_BACKGROUND_NAME: {
            name: 'background_name', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_BACKGROUND_NUMBER: {
            name: 'background_number', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_BRIGHTNESS: {
            name: 'brightness', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_COLOR: {
            name: 'color', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_LAYER: {
            name: 'layer', color: colors.motion,
            features: [],
        },
        SENSOR_OBJECT_LOOK_NAME: {
            name: 'look_name', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_LOOK_NUMBER: {
            name: 'look_number', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_ROTATION: {
            name: 'rotation', color: colors.motion,
            features: [],
        },
        SENSOR_OBJECT_SIZE: {
            name: 'size', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_TRANSPARENCY: {
            name: 'transparency', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_X: {
            name: 'position_x', color: colors.motion,
            features: [],
        },
        SENSOR_OBJECT_Y: {
            name: 'position_y', color: colors.motion,
            features: [],
        },
        SENSOR_OBJECT_DISTANCE_TO: {
            name: 'distance_to', color: colors.motion,
            features: [],
        },
        SENSOR_OBJECT_ANGULAR_VELOCITY: {
            name: 'angular_velocity', color: colors.motion,
            features: [...featureGroups.physics],
        },
        SENSOR_OBJECT_X_VELOCITY: {
            name: 'x_velocity', color: colors.motion,
            features: [...featureGroups.physics],
        },
        SENSOR_OBJECT_Y_VELOCITY: {
            name: 'y_velocity', color: colors.motion,
            features: [...featureGroups.physics],
        },
        SENSOR_COLLIDES_WITH_EDGE: {
            name: 'touches_edge', color: colors.event,
            features: [...featureGroups.touch],
        },
        SENSOR_COLLIDES_WITH_FINGER: {
            name: 'touches_finger', color: colors.event,
            features: [...featureGroups.touch, ...featureGroups.finger],
        },
        SENSOR_FINGER_TOUCHED: {
            name: 'screen_is_touched', color: colors.event,
            features: [...featureGroups.finger],
        },
        SENSOR_FINGER_X: {
            name: 'screen_touch_x', color: colors.sensor,
            features: [...featureGroups.finger],
        },
        SENSOR_FINGER_Y: {
            name: 'screen_touch_y', color: colors.sensor,
            features: [...featureGroups.finger],
        },
        SENSOR_LAST_FINGER_INDEX: {
            name: 'last_screen_touch_index', color: colors.sensor,
            features: [...featureGroups.finger],
        },
        SENSOR_DATE_DAY: {
            name: 'day', color: colors.sensor,
            features: [...featureGroups.dateTime],
        },
        SENSOR_DATE_MONTH: {
            name: 'month', color: colors.sensor,
            features: [...featureGroups.dateTime],
        },
        SENSOR_DATE_WEEKDAY: {
            name: 'weekday', color: colors.sensor,
            features: [...featureGroups.dateTime],
        },
        SENSOR_DATE_YEAR: {
            name: 'year', color: colors.sensor,
            features: [...featureGroups.dateTime],
        },
        SENSOR_TIME_HOUR: {
            name: 'hour', color: colors.sensor,
            features: [...featureGroups.dateTime],
        },
        SENSOR_TIME_MINUTE: {
            name: 'minute', color: colors.sensor,
            features: [...featureGroups.dateTime],
        },
        SENSOR_TIME_SECOND: {
            name: 'second', color: colors.sensor,
            features: [...featureGroups.dateTime],
        },
        SENSOR_FACE_DETECTED: {
            name: 'face_is_visible', color: colors.sensor,
            features: [...featureGroups.faceDetection],
        },
        SENSOR_FACE_SIZE: {
            name: 'face_size', color: colors.sensor,
            features: [...featureGroups.faceDetection],
        },
        SENSOR_FACE_X_POSITION: {
            name: 'face_x_position', color: colors.sensor,
            features: [...featureGroups.faceDetection],
        },
        SENSOR_FACE_Y_POSITION: {
            name: 'face_y_position', color: colors.sensor,
            features: [...featureGroups.faceDetection],
        },
        SENSOR_X_ACCELERATION: {
            name: 'acceleration_x', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_X_INCLINATION: {
            name: 'inclination_x', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_Y_ACCELERATION: {
            name: 'acceleration_y', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_Y_INCLINATION: {
            name: 'inclination_y', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_Z_ACCELERATION: {
            name: 'acceleration_z', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_ALTITUDE: {
            name: 'altitude', color: colors.sensor,
            features: [...featureGroups.location],
        },
        SENSOR_LONGITUDE: {
            name: 'longitude', color: colors.sensor,
            features: [...featureGroups.location],
        },
        SENSOR_COMPASS_DIRECTION: {
            name: 'compass_direction', color: colors.sensor,
            features: [...featureGroups.location],
        },
        SENSOR_LATITUDE: {
            name: 'latitude', color: colors.sensor,
            features: [...featureGroups.location],
        },
        SENSOR_LOCATION_ACCURACY: {
            name: 'location_accuracy', color: colors.sensor,
            features: [...featureGroups.location],
        },
        SENSOR_NFC_TAG_ID: {
            name: 'nfc_tag_id', color: colors.bluetooth,
            features: [...featureGroups.nfc],
        },
        SENSOR_NFC_TAG_MESSAGE: {
            name: 'nfc_tag_message', color: colors.bluetooth,
            features: [...featureGroups.nfc],
        },
        SENSOR_DRONE_INITIALIZED: {
            name: 'drone_initialized', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_BATTERY_STATUS: {
            name: 'drone_battery_status', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_USB_ACTIVE: {
            name: 'drone_usb_active', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_USB_REMAINING_TIME: {
            name: 'drone_usb_remaining_time', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_CAMERA_READY: {
            name: 'drone_camera_ready', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_RECORD_READY: {
            name: 'drone_record_ready', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_RECORDING: {
            name: 'drone_recording', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_NUM_FRAMES: {
            name: 'drone_num_frames', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_FLYING: {
            name: 'drone_flying', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_EMERGENCY_STATE: {
            name: 'drone_emergency_state', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_EV3_SENSOR_1: {
            name: 'EV3_sensor_1', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_EV3_SENSOR_3: {
            name: 'EV3_sensor_3', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_EV3_SENSOR_4: {
            name: 'EV3_sensor_4', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_NXT_SENSOR_1: {
            name: 'NXT_sensor_1', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_NXT_SENSOR_2: {
            name: 'NXT_sensor_2', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_NXT_SENSOR_3: {
            name: 'NXT_sensor_3', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_NXT_SENSOR_4: {
            name: 'NXT_sensor_4', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_PHIRO_BOTTOM_LEFT: {
            name: 'phiro_bottom_left', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_BOTTOM_RIGHT: {
            name: 'phiro_bottom_right', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_FRONT_LEFT: {
            name: 'phiro_front_left', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_FRONT_RIGHT: {
            name: 'phiro_front_right', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_SIDE_LEFT: {
            name: 'phiro_side_left', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_SIDE_RIGHT: {
            name: 'phiro_side_right', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
    },
};

export default info;
