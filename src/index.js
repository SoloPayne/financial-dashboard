
    $(function() {
      $("#chart").shieldChart({
        theme: "light",
        exportOptions: {
          image: false,
          print: false
        },
        primaryHeader: {
          text: ""
        },
        chartLegend: {
          enabled: true
        },
        // seriesSettings: {
        //     pie: {
        //         enablePointSelection: true
        //     }
        // },
        dataSeries: [{
          seriesType: "pie",
          // collectionAlias: "Usage",
          data: [
            ["PAYE", 47.1],
            {
              collectionAlias: "Direct Taxes",
              y: 26.8,
              selected: true
            },
            ["CGT", 11.4],
            ["Stamp Duty", 8.8],
            ["WHT", 14.6]
          ]
        }]
      });
    });

    $(function() {
      $("#chart2").shieldChart({
        theme: "light",
        exportOptions: {
          image: false,
          print: false
        },
        primaryHeader: {
          text: ""
        },
        chartLegend: {
          enabled: true
        },
        // seriesSettings: {
        //     pie: {
        //         enablePointSelection: true
        //     }
        // },
        dataSeries: [{
          seriesType: "bar",
          // collectionAlias: "Usage",
          data: [
            ["PAYE", 47.1],
            {
              collectionAlias: "Direct Taxes",
              y: 26.8,
              selected: true
            },
            ["CGT", 11.4],
            ["Stamp Duty", 8.8],

          ]
        }]
      });
    });
