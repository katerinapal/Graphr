document.getElementById('&raquo;').onclick = function() {
	jsgui.hideSidebar();
}
document.getElementById('&laquo;').onclick = function() {
	jsgui.showSidebar();
}
document.getElementById('tool_select_pointer').onclick = function() {
	jsgui.setTool('pointer');
}
document.getElementById('tool_select_trace').onclick = function() {
	jsgui.setTool('trace');
}
document.getElementById('tool_select_vertex').onclick = function() {
	jsgui.setTool('vertex');
}
document.getElementById('tool_select_root').onclick = function() {
	jsgui.setTool('root');
}
document.getElementById('tool_select_intersect').onclick = function() {
	jsgui.setTool('intersect');
}
document.getElementById('tool_select_derivative').onclick = function() {
	jsgui.setTool('derivative');
}
document.getElementById('tool_select_zoombox').onclick = function() {
	jsgui.setTool('zoombox');
}
document.getElementById('tool_select_zoomin').onclick = function() {
	jsgui.setTool('zoomin');
}
document.getElementById('tool_select_zoomout').onclick = function() {
	jsgui.setTool('zoomout');
}
document.getElementById('Apply').onclick = function() {
	jsgcalc.setWindow($('#toolbox_zoombox_xmin').val(), $('#toolbox_zoombox_xmax').val(), $('#toolbox_zoombox_ymin').val(), $('#toolbox_zoombox_ymax').val());
}
document.getElementById('Reset View').onclick = function() {
	jsgcalc.resetZoom();
}
document.getElementById('Trace').onclick = function() {
	jsgui.doTrace($('#toolbox_trace_input').val());
}
document.getElementById('Evaluate').onclick = function() {
	jsgui.evaluate();
}
document.getElementById('+').onclick = function() {
	jsgui.addInput();
}
document.getElementById('settings_button').onclick = function() {
	$('#settings').toggle(400);
}
document.getElementById('angle_select_degrees').onclick = function() {
	jsgui.setAngles('degrees');
}
document.getElementById('angle_select_radians').onclick = function() {
	jsgui.setAngles('radians');
}
document.getElementById('angle_select_gradians').onclick = function() {
	jsgui.setAngles('gradians');
}
document.getElementById('gridlines_select_normal').onclick = function() {
	jsgui.setGridlines('normal');
}
document.getElementById('gridlines_select_less').onclick = function() {
	jsgui.setGridlines('less');
}
document.getElementById('gridlines_select_off').onclick = function() {
	jsgui.setGridlines('off');
}
document.getElementById('quality_select_01').onclick = function() {
	jsgui.setQuality(0.1);
}
document.getElementById('quality_select_05').onclick = function() {
	jsgui.setQuality(0.5);
}
document.getElementById('quality_select_1').onclick = function() {
	jsgui.setQuality(1);
}
document.getElementById('quality_select_5').onclick = function() {
	jsgui.setQuality(5);
}
document.getElementById('Disclaimer').onclick = function() {
	about();
}
