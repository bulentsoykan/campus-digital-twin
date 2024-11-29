import { useEffect, useRef } from 'react';
import { Viewer, Entity, CameraFlyTo, Scene } from 'resium';
import * as Cesium from 'cesium';
import { Cartesian3, Color, HeightReference } from 'cesium';
import { UCF_COORDINATES } from '../constants/coordinates';
import { BUILDINGS } from '../constants/buildings';
import { CESIUM_TOKEN, CESIUM_IMAGERY_PROVIDER } from '../config/cesium';

// Initialize Cesium ion access token
Cesium.Ion.defaultAccessToken = CESIUM_TOKEN;

export function CesiumViewer() {
  const viewerRef = useRef<Cesium.Viewer | null>(null);

  useEffect(() => {
    if (viewerRef.current?.cesiumElement) {
      const viewer = viewerRef.current.cesiumElement;
      
      // Configure viewer settings
      viewer.scene.globe.enableLighting = true;
      viewer.scene.globe.maximumScreenSpaceError = 2;
      viewer.scene.fog.enabled = true;
      
      // Set high-quality terrain
      viewer.terrainProvider = Cesium.createWorldTerrain({
        requestVertexNormals: true,
        requestWaterMask: true
      });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Viewer
        ref={viewerRef}
        full
        timeline={false}
        animation={false}
        baseLayerPicker={true}
        navigationHelpButton={false}
        homeButton={true}
        geocoder={false}
        sceneModePicker={true}
        shadows={true}
        imageryProvider={new Cesium.IonImageryProvider(CESIUM_IMAGERY_PROVIDER)}
      >
        <Scene />
        
        {/* Main Campus Marker */}
        <Entity
          name="UCF Main Campus"
          position={Cartesian3.fromDegrees(
            UCF_COORDINATES.longitude,
            UCF_COORDINATES.latitude,
            0
          )}
          point={{
            pixelSize: 10,
            color: Color.GOLD,
            outlineColor: Color.BLACK,
            outlineWidth: 2,
            heightReference: HeightReference.CLAMP_TO_GROUND,
          }}
          label={{
            text: 'UCF Main Campus',
            font: '16px sans-serif',
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new Cesium.Cartesian2(0, -10),
          }}
          description="University of Central Florida Main Campus"
        />

        {/* Building Models */}
        {BUILDINGS.map((building) => (
          <Entity
            key={building.id}
            position={Cartesian3.fromDegrees(
              building.longitude,
              building.latitude,
              0
            )}
            box={{
              dimensions: new Cartesian3(
                building.width,
                building.length,
                building.height
              ),
              material: Color.fromCssColorString(building.color),
              outline: true,
              outlineColor: Color.BLACK,
            }}
            label={{
              text: building.name,
              font: '14px sans-serif',
              style: Cesium.LabelStyle.FILL_AND_OUTLINE,
              outlineWidth: 2,
              verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              pixelOffset: new Cesium.Cartesian2(0, -10),
            }}
          />
        ))}

        {/* Initial Camera Position */}
        <CameraFlyTo
          duration={2}
          destination={Cartesian3.fromDegrees(
            UCF_COORDINATES.longitude,
            UCF_COORDINATES.latitude,
            UCF_COORDINATES.height
          )}
        />
      </Viewer>
    </div>
  );
}