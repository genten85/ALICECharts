var State = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

var Poverty = [
  230609,
  14948,
  253441,
  141651,
  1237637,
  137724,
  85002,
  26780,
  20660,
  775491,
  416698,
  28786,
  55946,
  399400,
  232148,
  88016,
  85957,
  213857,
  226270,
  44738,
  127461,
  175543,
  367281,
  127268,
  166231,
  223112,
  34332,
  52682,
  92844,
  27672,
  230697,
  99797,
  675229,
  414305,
  18304,
  432835,
  156378,
  133776,
  397224,
  442214,
  33197,
  211287,
  26274,
  289710,
  1022506,
  70220,
  18095,
  224235,
  190017,
  90916,
  170501,
  15832
];

var ALICE = [
  529392,
  53719,
  686874,
  356487,
  3098993,
  481068,
  268945,
  88994,
  30459,
  2123062,
  1007671,
  104119,
  196078,
  1132976,
  726684,
  330460,
  306227,
  490415,
  447917,
  150786,
  435357,
  478340,
  1039199,
  493657,
  330251,
  664183,
  115173,
  199920,
  290668,
  118642,
  650968,
  207358,
  1585856,
  1096323,
  67923,
  1223306,
  431035,
  406228,
  1267184,
  325546,
  89388,
  542013,
  91576,
  744048,
  2580577,
  286171,
  62300,
  712205,
  638826,
  222564,
  600132,
  58021
];

var AboveALICE = [
  473862,
  99598,
  682300,
  262162,
  4525893,
  719944,
  541720,
  119731,
  70292,
  1948753,
  1051879,
  184859,
  162203,
  1590115,
  705298,
  382100,
  342922,
  432645,
  447877,
  152791,
  897368,
  993736,
  1103130,
  769256,
  248900,
  650662,
  111244,
  230339,
  287937,
  204344,
  1335614,
  184380,
  2371945,
  1040811,
  100830,
  1300296,
  384279,
  454738,
  1552638,
  82905,
  135715,
  485061,
  98304,
  655725,
  2957220,
  347859,
  78172,
  1141641,
  953696,
  167544,
  710893,
  75244
];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: State,
    datasets: [
      {
        label: "Poverty Count",
        backgroundColor: "#c7d5eb",
        data: Poverty
      },
      {
        label: "ALICE Count",
        backgroundColor: "#5681c2",
        data: ALICE
      },
      {
        label: "Above ALICE Count",
        backgroundColor: "#223a5e",
        data: AboveALICE
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          stacked: false
        }
      ],
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  }
});

var topStates = [
  "California",
  "Texas",
  "Florida",
  "New York",
  "Pennsylvania",
  "Ohio",
  "Illinois",
  "North Carolina",
  "Michigan",
  "Georgia"
];
var stateCount = [
  3098993,
  2580577,
  2123062,
  1585856,
  1267184,
  1223306,
  1132976,
  1096323,
  1039199,
  1007671
];
var ctx = document.getElementById("fireChart");
var fireChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: topStates,
    datasets: [
      {
        data: stateCount,
        backgroundColor: "#223a5e"
      }
    ]
  },
  options: {
    legend: { display: false }
  }
});

var topCounties = [
  "Los Angeles County, California",
  "Cook County, Illinois",
  "Harris County, Texas",
  "Maricopa County, Arizona",
  "San Diego County, California",
  "Miami-Dale County Florida",
  "Dallas County, Texas",
  "Orange County, California",
  "Kings County, New York",
  "Clark County, Nevada"
];
var countyCount = [
  822909,
  425036,
  412035,
  386730,
  255441,
  251189,
  250769,
  225693,
  216966,
  212697
];
var ctx = document.getElementById("iceChart");
var iceChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: topCounties,
    datasets: [
      {
        data: countyCount,
        backgroundColor: "#223a5e"
      }
    ]
  },
  options: {
    legend: { display: false }
  }
});
