import { Map } from "@pbe/react-yandex-maps";

const MapComponent = () => {
  

  return (
    <div>
      <Map
        defaultState={{
          center: [48.704272, 65.60203],
          zoom: 4,
          controls: ['zoomControl']
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        width={1139} height={'100vh'}
      >
      </Map>
    </div>
  );
};

export default MapComponent;