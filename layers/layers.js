var wms_layers = [];

var format_malawi_disticts_boundary_0 = new ol.format.GeoJSON();
var features_malawi_disticts_boundary_0 = format_malawi_disticts_boundary_0.readFeatures(json_malawi_disticts_boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_malawi_disticts_boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_malawi_disticts_boundary_0.addFeatures(features_malawi_disticts_boundary_0);
var lyr_malawi_disticts_boundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_malawi_disticts_boundary_0, 
                style: style_malawi_disticts_boundary_0,
                popuplayertitle: "malawi_disticts_boundary",
                interactive: true,
                title: '<img src="styles/legend/malawi_disticts_boundary_0.png" /> malawi_disticts_boundary'
            });

lyr_malawi_disticts_boundary_0.setVisible(true);
var layersList = [lyr_malawi_disticts_boundary_0];
lyr_malawi_disticts_boundary_0.set('fieldAliases', {'fid': 'fid', 'POLYID': 'POLYID', 'AREA_': 'AREA_', 'PERIMETER': 'PERIMETER', 'LOCATORNOD': 'LOCATORNOD', 'NUMERICUSE': 'NUMERICUSE', 'TEXTUSERID': 'TEXTUSERID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_malawi_disticts_boundary_0.set('fieldImages', {'fid': '', 'POLYID': '', 'AREA_': '', 'PERIMETER': '', 'LOCATORNOD': '', 'NUMERICUSE': '', 'TEXTUSERID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_malawi_disticts_boundary_0.set('fieldLabels', {'fid': 'no label', 'POLYID': 'no label', 'AREA_': 'no label', 'PERIMETER': 'no label', 'LOCATORNOD': 'no label', 'NUMERICUSE': 'no label', 'TEXTUSERID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_malawi_disticts_boundary_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});