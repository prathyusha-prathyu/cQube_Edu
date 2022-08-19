import { Component, Input, OnChanges, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import * as HighchartsMore from "highcharts/highcharts-more";

const HighchartsMore2: any = HighchartsMore;
HighchartsMore2(Highcharts);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {
  chart!: Highcharts.Chart;
  @Input() height: number | string = 'auto';
  @Input() title!: string;
  @Input() options: Highcharts.Options | undefined;

  @ViewChild('container') container: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.options !== undefined) {
      setTimeout(() => {
        this.createMultiBarChart(this.options);
      }, 100);
    }
  }

  createMultiBarChart(options: Highcharts.Options | undefined): void {
    let ref: BarChartComponent = this;
    let defaultOptions: Highcharts.Options = {
      chart: {
        type: 'bar',
        marginTop: 80
      },
      title: {
          text: ""
      },
      xAxis: {
          categories: [],
          title: {
              text: null
          },
          scrollbar: {
            enabled: false
          },
          gridLineColor: 'transparent',
          labels: {
            formatter: function(this: any) {
              if (typeof this.value === 'number') {
                if (this.value < 1000) {
                  return `${this.value}`;
                } else if (this.value > 999 && this.value <= 9999) {
                  return `${this.value / 1000}K`;
                } else if (this.value > 9999 && this.value <= 9999999) {
                  return `${this.value / 100000}L`;
                } else {
                  return `${this.value / 10000000}Cr`;
                }
              }
              
              return `${this.axis.defaultLabelFormatter.call(this)}`;
            },
            style: {
              fontSize: '0.7rem'
            }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: null
          },
          gridLineColor: 'transparent',
          labels: {
            formatter: function(this: any) {
              if (typeof this.value === 'number') {
                if (this.value < 1000) {
                  return `${this.value}`;
                } else if (this.value > 999 && this.value <= 9999) {
                  return `${this.value / 1000}K`;
                } else if (this.value > 9999 && this.value <= 9999999) {
                  return `${this.value / 100000}L`;
                } else {
                  return `${this.value / 10000000}Cr`;
                }
              }
              
              return `${this.axis.defaultLabelFormatter.call(this)}`;
            },
            style: {
              fontSize: '0.7rem'
            }
          }
      },
      plotOptions: {
        bar: {
          dataLabels: {
              enabled: true,
              crop: false,
              allowOverlap: true,
              formatter: function(this: any) {
                return new Intl.NumberFormat('en-IN').format(this.y);
              }
          },
          minPointLength: 0
        },
        series: {
          events: {
            legendItemClick: function (e) {
              e.preventDefault();
            }
          },
          dataLabels: {
            style: {
              fontSize: '0.7rem'
            }
          }
        }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          floating: true,
          borderWidth: 0,
          shadow: false,
          itemStyle: {
            fontSize: '0.7rem'
          }
      },
      credits: {
          enabled: false
      },
      series: [],
      tooltip: {
        style: {
          fontSize: '0.8rem'
        },
        formatter: function(this: any) {
          return `${this.series.name}<br><span style="padding: 5px; background: ${this.color}"></span>${this.x}: ${new Intl.NumberFormat('en-IN').format(this.y)}`;
        }
      },
      responsive: {
        rules: [
          {
            chartOptions: {
              xAxis: {
                labels: {
                  style: {
                    fontSize: '0.9rem'
                  }
                }
              },
              yAxis: {
                labels: {
                  style: {
                    fontSize: '0.9rem'
                  }
                }
              },
              tooltip: {
                style: {
                  fontSize: '1rem'
                }
              },
              legend: {
                itemStyle: {
                  fontSize: '1rem'
                }
              },
              plotOptions: {
                series: {
                  dataLabels: {
                    style: {
                      fontSize: '0.9rem'
                    }
                  }
                }
              }
            },
            condition: {
              callback: function() {
                return window.innerWidth >= 1920 && window.innerWidth < 2048;
              },
              minWidth: 1920,
              maxWidth: 2048
            }
          },
          {
            chartOptions: {
              xAxis: {
                labels: {
                  style: {
                    fontSize: '1rem'
                  }
                }
              },
              yAxis: {
                labels: {
                  style: {
                    fontSize: '1rem'
                  }
                }
              },
              tooltip: {
                style: {
                  fontSize: '1.5rem'
                }
              },
              legend: {
                itemStyle: {
                  fontSize: '1.2rem'
                }
              },
              plotOptions: {
                series: {
                  dataLabels: {
                    style: {
                      fontSize: '1rem'
                    }
                  }
                }
              }
            },
            condition: {
              callback: function() {
                return window.innerWidth >= 2048 && window.innerWidth < 2560;
              },
              minWidth: 2048,
              maxWidth: 2560
            }
          },
          {
            chartOptions: {
              xAxis: {
                labels: {
                  style: {
                    fontSize: '1.2rem'
                  }
                }
              },
              yAxis: {
                labels: {
                  style: {
                    fontSize: '1.2rem'
                  }
                }
              },
              tooltip: {
                style: {
                  fontSize: '2rem'
                }
              },
              legend: {
                itemStyle: {
                  fontSize: '1.5rem'
                }
              },
              plotOptions: {
                series: {
                  dataLabels: {
                    style: {
                      fontSize: '1.5rem'
                    }
                  }
                }
              }
            },
            condition: {
              callback: function() {
                return window.innerWidth >= 2560 && window.innerWidth < 3840;
              },
              minWidth: 2560,
              maxWidth: 3840
            }
          },
          {
            chartOptions: {
              xAxis: {
                labels: {
                  style: {
                    fontSize: '1.8rem'
                  }
                }
              },
              yAxis: {
                labels: {
                  style: {
                    fontSize: '1.8rem'
                  }
                }
              },
              tooltip: {
                style: {
                  fontSize: '2.5rem'
                }
              },
              legend: {
                itemStyle: {
                  fontSize: '2rem'
                }
              },
              plotOptions: {  
                series: {
                  dataLabels: {
                    style: {
                      fontSize: '1.8rem'
                    }
                  }
                }
              }
            },
            condition: {
              callback: function() {
                return window.innerWidth >= 3840;
              },
              minWidth: 3840
            }
          }
        ]
      }
    };
    this.chart = Highcharts.chart(this.container.nativeElement, Highcharts.merge(defaultOptions, options), function(this: any) {
    });
  }
}
