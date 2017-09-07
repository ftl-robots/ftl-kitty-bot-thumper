const { Constants } = require('ftl-robot-host');
const { RaspiSerial } = require('ftl-standard-interface-hw-raspi');
const { SimpleMotorController } = require('ftl-pololu-devices');

var config = {
    interfaces: [
        {
            id: 'usb-serial-left',
            type: Constants.InterfaceTypes.SERIAL,
            implementation: new RaspiSerial('/dev/tty.usbserial1')
        },
        {
            id: 'usb-serial-right',
            type: Constants.InterfaceTypes.SERIAL,
            implementation: new RaspiSerial('/dev/tty.usbserial2')
        }
    ],
    devices: [
        {
            id: 'left-motor-controller',
            interfaceId: 'usb-serial-left',
            implementation: SimpleMotorController,
        },
        {
            id: 'right-motor-controller',
            interfaceId: 'usb-serial-right',
            implementation: SimpleMotorController
        }
    ],
    portMap: {
        'PWM-0': {
            deviceId: 'left-motor-controller',
            devicePortType: Constants.PortTypes.PWM,
            devicePort: 0
        },
        'PWM-1': {
            deviceId: 'right-motor-controller',
            devicePortType: Constants.PortTypes.PWM,
            devicePort: 0
        }
    }
};

module.exports = config;