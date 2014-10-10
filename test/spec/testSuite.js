/* global define */
define(function() {
'use strict';

/* return an array of specs to be run */
return {
	specs: [
		'spec/bq_bat',
		'spec/bq_photoresistor',
		'spec/bq_led',
		'spec/bq_piezo_buzzer',
		'spec/bq_piezo_buzzerav',
		'spec/bq_potentiometer',
		'spec/bq_infrared',
		'spec/bq_button',
		'spec/bq_bluetooth_slave',
		'spec/bq_joystick',
		'spec/bq_buttons',
		'spec/zum_led',
		'spec/zum_photoresistor',
		'spec/zum_piezo_buzzer',
		'spec/zum_piezo_buzzerav',
		'spec/zum_potentiometer',
		'spec/zum_infrared',
		'spec/zum_follower',
		'spec/zum_button',
		'spec/servo_cont',
		'spec/servo_move',
		'spec/servo_read_degrees',
		'spec/variables_get',
		'spec/variables_set',
		'spec/variables_declare',
		'spec/variables_define',
		'spec/controls_if',
		'spec/controls_switch',
		'spec/controls_whileUntil',
		'spec/base_delay',
		'spec/controls_for',
		'spec/controls_forEach',
		'spec/controls_flow_statements',
		'spec/logic_compare',
		'spec/logic_operation',
		'spec/logic_boolean',
		'spec/logic_negate',
		'spec/logic_null',
		'spec/math_number',
		'spec/math_random',
		'spec/base_map',
		'spec/advanced_map',
		'spec/math_arithmetic',
		'spec/math_modulo',
		'spec/text',
		'spec/text_join',
		'spec/text_append',
		'spec/text_length',
		'spec/text_isEmpty',
		'spec/text_indexOf',
		'spec/text_charAt',
		'spec/text_changeCase',
		'spec/text_trim',
		'spec/text_print',
		'spec/text_prompt',
		'spec/inout_builtin_led',
		'spec/inout_digital_write',
		'spec/inout_digital_read',
		'spec/inout_analog_write',
		'spec/inout_analog_read',
		'spec/inout_highlow', 
		'spec/serial_print',
		'spec/serial_read',
		'spec/serial_println',
		'spec/serial_special',
		'spec/advanced_conversion',
		'spec/serial_available',
		'spec/procedures_defreturn', 
		'spec/procedures_defnoreturn',
		'spec/procedures_ifreturn',
		'spec/procedures_callreturn',
		'spec/procedures_callnoreturn'
		]
	};
});
