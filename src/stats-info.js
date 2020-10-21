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
    embroidery: 'cc73a1',
    cast: '886a4a',
    web: 'd26666',
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
    web: 'web',

    embroidery: 'embroidery',

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
    web: [features.web, features.wlan, features.hardware],

    embroidery: [features.embroidery],

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
            color: colors.cast,
        },
        userBrick: {
            name: 'User brick',
            color: colors.userBricks,
        },
        embroidery: {
            name: 'Embroidery',
            color: colors.embroidery,
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
        web: {
            name: 'Web',
            color: colors.web,
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
            name: 'When scene starts',
            color: colors.event,
            features: [],
        },
        WhenScript: {
            name: 'When tapped',
            color: colors.event,
            features: [],
        },
        WhenTouchDownScript: {
            name: 'When stage is tapped',
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
            name: 'Broadcast and wait',
            color: colors.event,
            features: [],
        },
        WhenConditionScript: {
            name: 'When _ becomes true',
            color: colors.event,
            features: [],
        },
        WhenBounceOffScript: {
            name: 'When you bounce off',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        WhenBackgroundChangesScript: {
            name: 'When background changes to',
            color: colors.event,
            features: [],
        },
        WhenClonedScript: {
            name: 'When you start as a clone',
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
            name: 'End of loop',
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
        ForVariableFromToBrick: {
            name: 'For values from _ to _',
            color: colors.control,
            features: [...featureGroups.variable, ...featureGroups.list],
        },
        ForItemInUserListBrick: {
            name: 'For each value from _',
            color: colors.control,
            features: [...featureGroups.variable, ...featureGroups.list],
        },
        SceneStartBrick: {
            name: 'Start scene',
            color: colors.control,
            features: [],
        },
        ExitStageBrick: {
            name: 'Finish stage',
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
            name: 'Wait for next NFC tag to write',
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
            name: 'Set x',
            color: colors.motion,
            features: [],
        },
        SetYBrick: {
            name: 'Set y',
            color: colors.motion,
            features: [],
        },
        ChangeXByNBrick: {
            name: 'Change x',
            color: colors.motion,
            features: [],
        },
        ChangeYByNBrick: {
            name: 'Change y',
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
            name: 'Point towards',
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
            name: 'Go to front',
            color: colors.motion,
            features: [],
        },
        VibrationBrick: {
            name: 'Vibrate',
            color: colors.motion,
            features: [],
        },
        SetPhysicsObjectTypeBrick: {
            name: 'Set your motion type',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        SetVelocityBrick: {
            name: 'Set velocity',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        TurnLeftSpeedBrick: {
            name: 'Spin left',
            color: colors.motion,
            features: [...featureGroups.physics],
        },
        TurnRightSpeedBrick: {
            name: 'Spin right',
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
        StopSoundBrick: {
            name: 'Stop sound',
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
        PauseForBeatsBrick: {
            name: 'Pause for beats',
            color: colors.sounds,
            features: [],
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

        ClearGraphicEffectBrick: {
            name: 'Clear graphic effects',
            color: colors.looks,
            features: [],
        },
        SetBackgroundBrick: {
            name: 'Set background',
            color: colors.looks,
            features: [],
        },
        SetBackgroundAndWaitBrick: {
            name: 'Set background and wait',
            color: colors.looks,
            features: [],
        },
        SetBackgroundByIndexBrick: {
            name: 'Set background to #',
            color: colors.looks,
            features: [],
        },
        SetBackgroundByIndexAndWaitBrick: {
            name: 'Set background to # and wait',
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
        LookRequestBrick: {
            name: 'Get image and use as current look',
            color: colors.looks,
            features: [...featureGroups.web],
        },
        BackgroundRequestBrick: {
            name: 'Get image and use as current background',
            color: colors.looks,
            features: [...featureGroups.web],
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
        ClearBackgroundBrick: {
            name: 'Clear',
            color: colors.looks,
            features: [...featureGroups.pen],
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
            features: [...featureGroups.variable],
        },
        ShowTextColorSizeAlignmentBrick: {
            name: 'Show variable at position with size and aligned',
            color: colors.data,
            features: [...featureGroups.variable],
        },
        HideTextBrick: {
            name: 'Hide variable',
            color: colors.data,
            features: [...featureGroups.variable],
        },
        WriteVariableOnDeviceBrick: {
            name: 'Write variable on device',
            color: colors.data,
            features: [...featureGroups.variable],
        },
        ReadVariableFromDeviceBrick: {
            name: 'Read variable from device',
            color: colors.data,
            features: [...featureGroups.variable],
        },
        WriteVariableToFileBrick: {
            name: 'Write variable to file',
            color: colors.data,
            features: [...featureGroups.variable],
        },
        ReadVariableFromFileBrick: {
            name: 'Read variable from file',
            color: colors.data,
            features: [...featureGroups.variable],
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
        ClearUserListBrick: {
            name: 'Delete all items from list',
            color: colors.data,
            features: [...featureGroups.list],
        },
        InsertItemIntoUserListBrick: {
            name: 'Insert into list',
            color: colors.data,
            features: [...featureGroups.list],
        },
        ReplaceItemInUserListBrick: {
            name: 'Replace item in list',
            color: colors.data,
            features: [...featureGroups.list],
        },
        WriteListOnDeviceBrick: {
            name: 'Write list on device',
            color: colors.data,
            features: [...featureGroups.list],
        },
        ReadListFromDeviceBrick: {
            name: 'Read list from device',
            color: colors.data,
            features: [...featureGroups.list],
        },
        StoreCSVIntoUserListBrick: {
            name: 'Store column of comma-separated values',
            color: colors.data,
            features: [...featureGroups.list],
        },
        WebRequestBrick: {
            name: 'Send web request',
            color: colors.data,
            features: [...featureGroups.variable, ...featureGroups.web],
        },

        // Lego
        LegoNxtMotorMoveBrick: {
            name: 'Set NXT motor speed',
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
            name: 'Set EV3 motor speed',
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
            name: 'Set EV3 LED status',
            color: colors.lego,
            features: [...featureGroups.lego],
        },

        // User bricks
        UserBrick: {
            name: 'My bricks',
            color: colors.userBricks,
            features: [...featureGroups.userBrick],
        },

        // Robots

        //AR.Drone
        DroneTakeOffLandBrick: {
            name: 'Take off / land AR.Drone 2.0',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneEmergencyBrick: {
            name: 'Emergency AR.Drone 2.0',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveUpBrick: {
            name: 'Move AR.Drone 2.0 up',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveDownBrick: {
            name: 'Move AR.Drone 2.0 down',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveLeftBrick: {
            name: 'Move AR.Drone 2.0 left',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveRightBrick: {
            name: 'Move AR.Drone 2.0 right',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveForwardBrick: {
            name: 'Move AR.Drone 2.0 forward',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneMoveBackwardBrick: {
            name: 'Move AR.Drone 2.0 backward',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneTurnLeftBrick: {
            name: 'Turn AR.Drone 2.0 left',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneTurnRightBrick: {
            name: 'Turn AR.Drone 2.0 right',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneFlipBrick: {
            name: 'Flip AR.Drone 2.0',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DronePlayLedAnimationBrick: {
            name: 'Play AR.Drone 2.0 flash animation',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        DroneSwitchCameraBrick: {
            name: 'Switch AR.Drone 2.0 camera',
            color: colors.drone,
            features: [...featureGroups.drone],
        },

        // Jumping Sumo
        JumpingSumoMoveForwardBrick: {
            name: 'Move Jumping Sumo forward',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoMoveBackwardBrick: {
            name: 'Move Jumping Sumo backward',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoAnimationsBrick: {
            name: 'Animations Jumping Sumo',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoSoundBrick: {
            name: 'Jumping Sumo Sound and Volume',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoNoSoundBrick: {
            name: 'No Jumping Sumo sound',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoJumpLongBrick: {
            name: 'Jump Jumping Sumo long',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoJumpHighBrick: {
            name: 'Jump Jumping Sumo high',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoRotateLeftBrick: {
            name: 'Turn Jumping Sumo left',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoRotateRightBrick: {
            name: 'Turn Jumping Sumo right',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoTurnBrick: {
            name: 'Flip Jumping Sumo',
            color: colors.drone,
            features: [...featureGroups.drone],
        },
        JumpingSumoTakingPictureBrick: {
            name: 'Taking picture Jumping Sumo',
            color: colors.drone,
            features: [...featureGroups.drone],
        },

        // Phiro
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

        // Arduino
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

        // Raspberry Pi
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

        // Embroidery
        StitchBrick: {
            name: 'Stitch',
            color: colors.embroidery,
            features: [...featureGroups.embroidery],
        },
        RunningStitchBrick: {
            name: 'Start running stitch with length',
            color: colors.embroidery,
            features: [...featureGroups.embroidery],
        },
        ZigZagStitchBrick: {
            name: 'Start zigzag stitch with length and width',
            color: colors.embroidery,
            features: [...featureGroups.embroidery],
        },
        TripleStitchBrick: {
            name: 'Start triple stitch with length',
            color: colors.embroidery,
            features: [...featureGroups.embroidery],
        },
        StopRunningStitchBrick: {
            name: 'Stop current stitch',
            color: colors.embroidery,
            features: [...featureGroups.embroidery],
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
            name: 'touches actor or object',
            color: colors.event,
            features: [...featureGroups.touch],
        },

        FUNCTION_ABS: {
            name: 'absolute value',
            color: colors.control,
            features: [],
        },
        FUNCTION_ARCCOS: {
            name: 'arccosine',
            color: colors.control,
            features: [],
        },
        FUNCTION_ARCSIN: {
            name: 'arcsine',
            color: colors.control,
            features: [],
        },
        FUNCTION_ARCTAN: {
            name: 'arctangent',
            color: colors.control,
            features: [],
        },
        FUNCTION_ARCTAN2: {
            name: 'arctangent2',
            color: colors.control,
            features: [],
        },
        FUNCTION_CEIL: {
            name: 'ceiling',
            color: colors.control,
            features: [],
        },
        FUNCTION_COS: {
            name: 'cosine',
            color: colors.control,
            features: [],
        },
        FUNCTION_EXP: {
            name: 'exponent',
            color: colors.control,
            features: [],
        },
        FUNCTION_FALSE: {
            name: 'false',
            color: colors.control,
            features: [],
        },
        FUNCTION_FLOOR: {
            name: 'floor',
            color: colors.control,
            features: [],
        },
        FUNCTION_LN: {
            name: 'natural logarithm',
            color: colors.control,
            features: [],
        },
        FUNCTION_LOG: {
            name: 'decimal logarithm',
            color: colors.control,
            features: [],
        },
        FUNCTION_MAX: {
            name: 'maximum of',
            color: colors.control,
            features: [],
        },
        FUNCTION_MIN: {
            name: 'minimum of',
            color: colors.control,
            features: [],
        },
        FUNCTION_MOD: {
            name: 'modulo',
            color: colors.control,
            features: [],
        },
        FUNCTION_PI: {
            name: 'pi',
            color: colors.control,
            features: [],
        },
        FUNCTION_POWER: {
            name: 'power',
            color: colors.control,
            features: [],
        },
        FUNCTION_RAND: {
            name: 'random value',
            color: colors.control,
            features: [],
        },
        FUNCTION_ROUND: {
            name: 'round',
            color: colors.control,
            features: [],
        },
        FUNCTION_SIN: {
            name: 'sine',
            color: colors.control,
            features: [],
        },
        FUNCTION_SQRT: {
            name: 'square root',
            color: colors.control,
            features: [],
        },
        FUNCTION_TAN: {
            name: 'tangent',
            color: colors.control,
            features: [],
        },
        FUNCTION_TRUE: {
            name: 'true',
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
        FUNCTION_INDEX_OF_ITEM: {
            name: `item's index`,
            color: colors.data,
            features: [...featureGroups.list],
        },
        FUNCTION_LIST_ITEM: {
            name: 'item',
            color: colors.data,
            features: [...featureGroups.list],
        },
        FUNCTION_NUMBER_OF_ITEMS: {
            name: 'number of items',
            color: colors.data,
            features: [...featureGroups.list],
        },
        FUNCTION_MULTI_FINGER_TOUCHED: {
            name: 'stage is touched',
            color: colors.sensor,
            features: [...featureGroups.finger],
        },
        FUNCTION_MULTI_FINGER_X: {
            name: 'stage touch x',
            color: colors.sensor,
            features: [...featureGroups.finger],
        },
        FUNCTION_MULTI_FINGER_Y: {
            name: 'stage touch y',
            color: colors.sensor,
            features: [...featureGroups.finger],
        },
        FUNCTION_ARDUINOANALOG: {
            name: 'arduino analog pin',
            color: colors.bluetooth,
            features: [...featureGroups.arduino],
        },
        FUNCTION_ARDUINODIGITAL: {
            name: 'arduino digital pin', color: colors.bluetooth,
            features: [...featureGroups.arduino],
        },
        FUNCTION_RASPIDIGITAL: {
            name: 'raspberry pi pin', color: colors.bluetooth,
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
            name: 'and', color: colors.control,
            features: [],
        },
        OPERATOR_LOGICAL_NOT: {
            name: 'not', color: colors.control,
            features: [],
        },
        OPERATOR_LOGICAL_OR: {
            name: 'or', color: colors.control,
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
            name: 'background name', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_BACKGROUND_NUMBER: {
            name: 'background number', color: colors.looks,
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
            name: 'look name', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_LOOK_NUMBER: {
            name: 'look number', color: colors.looks,
            features: [],
        },
        SENSOR_OBJECT_ROTATION: {
            name: 'direction', color: colors.motion,
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
            name: 'position x', color: colors.motion,
            features: [],
        },
        SENSOR_OBJECT_Y: {
            name: 'position y', color: colors.motion,
            features: [],
        },
        SENSOR_OBJECT_DISTANCE_TO: {
            name: 'distance to touch position', color: colors.motion,
            features: [],
        },
        SENSOR_OBJECT_ANGULAR_VELOCITY: {
            name: 'angular velocity', color: colors.motion,
            features: [...featureGroups.physics],
        },
        SENSOR_OBJECT_X_VELOCITY: {
            name: 'x velocity', color: colors.motion,
            features: [...featureGroups.physics],
        },
        SENSOR_OBJECT_Y_VELOCITY: {
            name: 'y velocity', color: colors.motion,
            features: [...featureGroups.physics],
        },
        SENSOR_COLLIDES_WITH_EDGE: {
            name: 'touches edge', color: colors.event,
            features: [...featureGroups.touch],
        },
        SENSOR_COLLIDES_WITH_FINGER: {
            name: 'touches finger', color: colors.event,
            features: [...featureGroups.touch, ...featureGroups.finger],
        },
        SENSOR_FINGER_TOUCHED: {
            name: 'stage is touched', color: colors.event,
            features: [...featureGroups.finger],
        },
        SENSOR_FINGER_X: {
            name: 'stage touch x', color: colors.sensor,
            features: [...featureGroups.finger],
        },
        SENSOR_FINGER_Y: {
            name: 'stage touch y', color: colors.sensor,
            features: [...featureGroups.finger],
        },
        SENSOR_LAST_FINGER_INDEX: {
            name: 'last stage touch index', color: colors.sensor,
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
            name: 'face is visible', color: colors.sensor,
            features: [...featureGroups.faceDetection],
        },
        SENSOR_FACE_SIZE: {
            name: 'face size', color: colors.sensor,
            features: [...featureGroups.faceDetection],
        },
        SENSOR_FACE_X_POSITION: {
            name: 'face x position', color: colors.sensor,
            features: [...featureGroups.faceDetection],
        },
        SENSOR_FACE_Y_POSITION: {
            name: 'face y position', color: colors.sensor,
            features: [...featureGroups.faceDetection],
        },
        SENSOR_X_ACCELERATION: {
            name: 'acceleration x', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_X_INCLINATION: {
            name: 'inclination x', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_Y_ACCELERATION: {
            name: 'acceleration y', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_Y_INCLINATION: {
            name: 'inclination y', color: colors.sensor,
            features: [...featureGroups.phoneSensor],
        },
        SENSOR_Z_ACCELERATION: {
            name: 'acceleration z', color: colors.sensor,
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
            name: 'compass direction', color: colors.sensor,
            features: [...featureGroups.location],
        },
        SENSOR_LATITUDE: {
            name: 'latitude', color: colors.sensor,
            features: [...featureGroups.location],
        },
        SENSOR_LOCATION_ACCURACY: {
            name: 'location accuracy', color: colors.sensor,
            features: [...featureGroups.location],
        },
        SENSOR_NFC_TAG_ID: {
            name: 'nfc tag id', color: colors.bluetooth,
            features: [...featureGroups.nfc],
        },
        SENSOR_NFC_TAG_MESSAGE: {
            name: 'nfc tag message', color: colors.bluetooth,
            features: [...featureGroups.nfc],
        },
        SENSOR_DRONE_INITIALIZED: {
            name: 'drone initialized', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_BATTERY_STATUS: {
            name: 'drone battery status', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_USB_ACTIVE: {
            name: 'drone usb active', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_USB_REMAINING_TIME: {
            name: 'drone usb remaining time', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_CAMERA_READY: {
            name: 'drone camera ready', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_RECORD_READY: {
            name: 'drone record ready', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_RECORDING: {
            name: 'drone camera recording', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_NUM_FRAMES: {
            name: 'drone camera number of frames', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_FLYING: {
            name: 'drone flying', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_DRONE_EMERGENCY_STATE: {
            name: 'drone emergency state', color: colors.drone,
            features: [...featureGroups.drone],
        },
        SENSOR_EV3_SENSOR_1: {
            name: 'EV3 touch', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_EV3_SENSOR_2: {
            name: 'EV3 infrared', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_EV3_SENSOR_3: {
            name: 'EV3 color', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_EV3_SENSOR_4: {
            name: 'EV3 ambient color', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_NXT_SENSOR_1: {
            name: 'NXT touch', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_NXT_SENSOR_2: {
            name: 'NXT sound', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_NXT_SENSOR_3: {
            name: 'NXT light', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_NXT_SENSOR_4: {
            name: 'NXT light active', color: colors.lego,
            features: [...featureGroups.lego],
        },
        SENSOR_PHIRO_BOTTOM_LEFT: {
            name: 'Phiro bottom Left Sensor', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_BOTTOM_RIGHT: {
            name: 'Phiro bottom right sensor', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_FRONT_LEFT: {
            name: 'Phiro front left sensor', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_FRONT_RIGHT: {
            name: 'Phiro front right sensor', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_SIDE_LEFT: {
            name: 'Phiro side left sensor', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_PHIRO_SIDE_RIGHT: {
            name: 'Phiro side right sensor', color: colors.bluetooth,
            features: [...featureGroups.phiro],
        },
        SENSOR_GAMEPAD_A_PRESSED: {
            name: 'gamepad A pressed', color: colors.cast,
            features: [...featureGroups.cast],
        },
        SENSOR_GAMEPAD_B_PRESSED: {
            name: 'gamepad B pressed', color: colors.cast,
            features: [...featureGroups.cast],
        },
        SENSOR_GAMEPAD_UP_PRESSED: {
            name: 'gamepad up pressed', color: colors.cast,
            features: [...featureGroups.cast],
        },
        SENSOR_GAMEPAD_DOWN_PRESSED: {
            name: 'gamepad down pressed', color: colors.cast,
            features: [...featureGroups.cast],
        },
        SENSOR_GAMEPAD_LEFT_PRESSED: {
            name: 'gamepad left pressed', color: colors.cast,
            features: [...featureGroups.cast],
        },
        SENSOR_GAMEPAD_RIGHT_PRESSED: {
            name: 'gamepad right pressed', color: colors.cast,
            features: [...featureGroups.cast],
        },
    },
};

export default info;
