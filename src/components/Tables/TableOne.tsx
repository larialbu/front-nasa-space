const climateData = {
  parameters: {
    TS: {
      longname: "Earth Skin Temperature",
      JAN: 29.03,
      FEB: 29.42,
      MAR: 28.78,
      APR: 28.19,
      MAY: 26.71,
      JUN: 25.55,
      JUL: 24.87,
      AUG: 24.55,
      SEP: 25.65,
      OCT: 27.43,
      NOV: 28.62,
      DEC: 28.94,
      ANN: 27.3
    },
    T2M: {
      longname: "Temperature at 2 Meters",
      JAN: 27.44,
      FEB: 27.8,
      MAR: 27.52,
      APR: 27.26,
      MAY: 26.24,
      JUN: 25.2,
      JUL: 24.68,
      AUG: 24.23,
      SEP: 24.96,
      OCT: 26.33,
      NOV: 27.19,
      DEC: 27.49,
      ANN: 26.35
    },
    TO3: {
      longname: "Total Column Ozone",
      JAN: 261.14,
      FEB: 261.72,
      MAR: 262.65,
      APR: 256.42,
      MAY: 249.59,
      JUN: 253,
      JUL: 261.43,
      AUG: 267.82,
      SEP: 278.67,
      OCT: 279.91,
      NOV: 270.56,
      DEC: 264.26,
      ANN: 263.94
    },
    TQV: {
      longname: "Total Column Precipitable Water",
      JAN: 38.12,
      FEB: 36.38,
      MAR: 42.55,
      APR: 41.96,
      MAY: 44.16,
      JUN: 39.62,
      JUL: 37.2,
      AUG: 33.63,
      SEP: 30.68,
      OCT: 33.3,
      NOV: 35.95,
      DEC: 37.21,
      ANN: 37.58
    },
    QV10M: {
      longname: "Specific Humidity at 10 Meters",
      JAN: 15.99,
      FEB: 16.14,
      MAR: 16.75,
      APR: 16.97,
      MAY: 17.12,
      JUN: 16.45,
      JUL: 15.81,
      AUG: 15.01,
      SEP: 14.95,
      OCT: 15.47,
      NOV: 16.02,
      DEC: 16.08,
      ANN: 16.05
    },
    EVLAND: {
      longname: "Evaporation Land",
      JAN: 21.3,
      FEB: 20.14,
      MAR: 29.18,
      APR: 38.59,
      MAY: 48.9,
      JUN: 49.63,
      JUL: 55.65,
      AUG: 58.25,
      SEP: 51.36,
      OCT: 37.01,
      NOV: 26.55,
      DEC: 25.53,
      ANN: 38.63
    },
    GWETTOP: {
      longname: "Surface Soil Wetness",
      JAN: 0.48,
      FEB: 0.47,
      MAR: 0.54,
      APR: 0.57,
      MAY: 0.68,
      JUN: 0.75,
      JUL: 0.77,
      AUG: 0.76,
      SEP: 0.65,
      OCT: 0.55,
      NOV: 0.51,
      DEC: 0.5,
      ANN: 0.6
    },
    T2M_MAX: {
      longname: "Temperature at 2 Meters Maximum",
      JAN: 32.62,
      FEB: 32.75,
      MAR: 32.83,
      APR: 32.76,
      MAY: 31.24,
      JUN: 29.18,
      JUL: 28.9,
      AUG: 28.45,
      SEP: 31.5,
      OCT: 32.19,
      NOV: 32.72,
      DEC: 32.45,
      ANN: 32.83
    },
    GWETPROF: {
      longname: "Profile Soil Moisture",
      JAN: 0.53,
      FEB: 0.53,
      MAR: 0.55,
      APR: 0.58,
      MAY: 0.64,
      JUN: 0.74,
      JUL: 0.77,
      AUG: 0.76,
      SEP: 0.69,
      OCT: 0.61,
      NOV: 0.56,
      DEC: 0.55,
      ANN: 0.63
    },
    GWETROOT: {
      longname: "Root Zone Soil Wetness",
      JAN: 0.53,
      FEB: 0.53,
      MAR: 0.55,
      APR: 0.57,
      MAY: 0.64,
      JUN: 0.73,
      JUL: 0.75,
      AUG: 0.75,
      SEP: 0.66,
      OCT: 0.58,
      NOV: 0.55,
      DEC: 0.54,
      ANN: 0.62
    },
    ALLSKY_SFC_UVA: {
      longname: "All Sky Surface UVA Irradiance",
      JAN: 16.58,
      FEB: 15.71,
      MAR: 15.17,
      APR: 13.8,
      MAY: 12.38,
      JUN: 12.4,
      JUL: 12.38,
      AUG: 12.42,
      SEP: 15.11,
      OCT: 15.99,
      NOV: 15.79,
      DEC: 16.29,
      ANN: 14.49
    },
    ALLSKY_SFC_UV_INDEX: {
      longname: "All Sky Surface UV Index",
      JAN: -999,
      FEB: -999,
      MAR: -999,
      APR: -999,
      MAY: -999,
      JUN: -999,
      JUL: -999,
      AUG: -999,
      SEP: -999,
      OCT: -999,
      NOV: -999,
      DEC: -999,
      ANN: -999
    },
  },
};

const TableOne = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Climate Data Overview
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 sm:grid-cols-12">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Variable
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              JAN
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              FEB
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              MAR
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              APR
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              MAY
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              JUN
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              JUL
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              AUG
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              SEP
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              OCT
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              NOV
            </h5>
          </div>
          {/* <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              DEC
            </h5>
          </div> */}
        </div>

        {Object.entries(climateData.parameters).map(([key, param], index) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-12 ${index === Object.entries(climateData.parameters).length - 1
              ? ""
              : "border-b border-stroke dark:border-dark-3"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {param.longname}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">{param.JAN}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">{param.FEB}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">{param.MAR}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              < p className="font-medium text-dark dark:text-white" > {param.APR}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              < p className="font-medium text-dark dark:text-white" > {param.MAY}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">{param.JUN}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">{param.JUL}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">{param.AUG}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              < p className="font-medium text-dark dark:text-white" > {param.SEP}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              < p className="font-medium text-dark dark:text-white" > {param.OCT}</p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              < p className="font-medium text-dark dark:text-white" > {param.NOV}</p>
            </div>
            {/* <div className="flex items-center justify-center px-2 py-4">
              < p className="font-medium text-dark dark:text-white" > {param.DEC}</p>
            </div> */}
          </div >
        ))}
      </div >
    </div >
  );
};

export default TableOne;
