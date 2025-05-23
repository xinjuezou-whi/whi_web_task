(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
        factory();
})((function () {
    'use strict';

    const {merge: merge} = window._;
    const echartSetOption = (e, t, a, r) => {
        const {breakpoints: o, resize: s} = window.phoenix.utils, n = t => {
            Object.keys(t).forEach((a => {
                window.innerWidth > o[a] && e.setOption(t[a]);
            }));
        }, c = document.body;
        e.setOption(merge(a(), t)), s((() => {
            e.resize(), r && n(r);
        })), r && n(r), c.addEventListener("clickControl", (({detail: {control: r}}) => {
            "phoenixTheme" === r && e.setOption(window._.merge(a(), t));
        }));
    };
    const resizeEcharts = () => {
        const e = document.querySelectorAll("[data-echart-responsive]");
        e.length > 0 && e.forEach((e => {
            echarts.getInstanceByDom(e)?.resize();
        }));
    };
    const navbarVerticalToggle = document.querySelector(".navbar-vertical-toggle");
    navbarVerticalToggle && navbarVerticalToggle.addEventListener("navbar.vertical.toggle", (e => resizeEcharts()));
    const echartTabs = document.querySelectorAll("[data-tab-has-echarts]");
    echartTabs && echartTabs.forEach((e => {
        e.addEventListener("shown.bs.tab", (e => {
            const t = e.target, {hash: a} = t, r = a || t.dataset.bsTarget,
                o = document.getElementById(r.substring(1))?.querySelector("[data-echart-tab]");
            o && window.echarts.init(o).resize();
        }));
    }));

    const emailCampaignReportsChartInit = () => {
        const {getColor: t, getData: a, toggleColor: e} = window.phoenix.utils,
            r = document.querySelector(".echart-email-campaign-report"), o = (t, a = "MMM DD") => {
                const e = t[1],
                    r = `<div class='ms-1'>\n          <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${e.borderColor ? e.borderColor : e.color}"></span>\n            ${e.axisValue} : ${"object" == typeof e.value ? e.value[1] : e.value}\n          </h6>\n        </div>`;
                return `<div>\n              <p class='mb-2 text-600'>\n                ${e.seriesName}\n              </p>\n              ${r}\n            </div>`
            }, i = [0, 1466, 966, 0], l = [{value: 2832, itemStyle: {color: t("primary-300")}}, 1366, 500, 966];
        if (r) {
            const s = a(r, "echarts"), n = echarts.init(r);
            echartSetOption(n, s, (() => ({
                color: [t("primary"), t("gray-300")],
                tooltip: {
                    trigger: "axis",
                    padding: [7, 10],
                    backgroundColor: t("gray-100"),
                    borderColor: t("gray-300"),
                    textStyle: {color: t("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {type: "none"},
                    formatter: o
                },
                xAxis: {
                    type: "category",
                    data: ["Total Emails", "Sent", "Bounce", "Delivered"],
                    splitLine: {show: !1},
                    axisLabel: {
                        color: t("gray-900"),
                        fontFamily: "Nunito Sans",
                        fontWeight: 400,
                        fontSize: 12.8,
                        margin: 24,
                        rotate: 30
                    },
                    axisLine: {show: !0, lineStyle: {color: t("gray-300")}},
                    axisTick: !1
                },
                yAxis: {
                    type: "value",
                    splitLine: {lineStyle: {color: t("gray-200")}},
                    axisLabel: {
                        color: t("gray-900"),
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: 12.8,
                        margin: 24
                    },
                    interval: 500
                },
                series: [{
                    name: "Placeholder",
                    type: "bar",
                    barWidth: "64px",
                    stack: "Total",
                    backgroundColor: t("white"),
                    label: {show: !1},
                    itemStyle: {borderColor: "transparent", color: "transparent"},
                    emphasis: {itemStyle: {borderColor: "transparent", color: "transparent"}},
                    data: i
                }, {
                    name: "Email Campaign",
                    type: "bar",
                    stack: "Total",
                    itemStyle: {color: t("primary-200")},
                    data: l,
                    label: {
                        show: !0,
                        position: "inside",
                        color: e(t("gray-1100"), t("gray-200")),
                        fontWeight: "normal",
                        fontSize: "12.8px",
                        formatter: t => `${t.value.toLocaleString()}`
                    }
                }],
                grid: {right: "0", left: 6, bottom: 10, top: "5%", containLabel: !0},
                animation: !1
            })), {
                xs: {
                    series: [{barWidth: "48px"}],
                    xAxis: {axisLabel: {show: !0, formatter: t => `${t.slice(0, 5)}...`}}
                },
                sm: {
                    series: [{barWidth: "64px"}],
                    xAxis: {axisLabel: {show: !0, formatter: t => `${t.slice(0, 11)}`, rotate: 0}}
                },
                md: {series: [{barWidth: "56px"}], xAxis: {axisLabel: {show: !1}}},
                lg: {series: [{barWidth: "64px"}], xAxis: {axisLabel: {show: !0, formatter: t => `${t.slice(0, 11)}`}}}
            });
        }
    };

    const socialMarketingRadarChartInit = () => {
        const {getColor: a, getData: e, rgbaColor: r, toggleColor: t} = window.phoenix.utils,
            o = document.querySelector(".echart-social-marketing-radar");
        if (o) {
            const i = e(o, "echarts"), n = echarts.init(o);
            echartSetOption(n, i, (() => ({
                color: [a("primary-300"), a("warning-300")],
                tooltip: {
                    trigger: "item",
                    padding: [7, 10],
                    backgroundColor: a("gray-100"),
                    borderColor: a("gray-300"),
                    textStyle: {color: a("gray-900"), fontSize: 12.8, fontFamily: "Nunito Sans"},
                    borderWidth: 1,
                    transitionDuration: 0
                },
                radar: {
                    splitNumber: 5,
                    axisNameGap: 10,
                    radius: "87%",
                    splitLine: {lineStyle: {color: a("gray-200")}},
                    splitArea: {
                        show: !0,
                        areaStyle: {
                            shadowBlur: .5,
                            color: [t(a("gray-100"), a("gray-100")), t(a("gray-soft"), a("gray-200"))]
                        }
                    },
                    axisLine: {show: !0, lineStyle: {color: a("gray-200")}},
                    name: {textStyle: {color: a("gray-700"), fontWeight: 800, fontSize: 10.2}},
                    indicator: [{name: "SAT", max: 5e3}, {name: "FRI", max: 5e3}, {name: "THU", max: 5e3}, {
                        name: "WED",
                        max: 5e3
                    }, {name: "TUE", max: 5e3}, {name: "MON", max: 5e3}, {name: "SUN", max: 5e3}]
                },
                series: [{
                    name: "Budget vs spending",
                    type: "radar",
                    symbol: "emptyCircle",
                    symbolSize: 6,
                    data: [{
                        value: [2100, 2300, 1600, 3700, 3e3, 2500, 2500],
                        name: "Offline Marketing",
                        itemStyle: {color: a("primary-300")},
                        areaStyle: {color: r(a("primary-300"), .3)}
                    }, {
                        value: [3e3, 1600, 3700, 500, 3700, 3e3, 3200],
                        name: "Online Marketing",
                        areaStyle: {color: r(a("warning-300"), .3)},
                        itemStyle: {color: a("warning-300")}
                    }]
                }],
                grid: {top: 10, left: 0}
            })), {md: {radar: {radius: "74%"}}, xl: {radar: {radius: "85%"}}});
        }
    };

    const salesTrendsChartInit = () => {
        const {getColor: e, getData: t, getPastDates: o, rgbaColor: a, toggleColor: r} = window.phoenix.utils,
            i = document.querySelector(".echart-sales-trends"), n = (e, t = "MMM DD") => {
                let o = "";
                return e.forEach((e => {
                    o += `<div class='ms-1'>\n          <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${e.color}"></span>\n            ${e.seriesName} : ${"object" == typeof e.value ? e.value[1] : e.value}\n          </h6>\n        </div>`;
                })), `<div>\n              <p class='mb-2 text-600'>\n                ${window.dayjs(e[0].axisValue).isValid() ? window.dayjs(e[0].axisValue).format("DD MMM, YYYY") : e[0].axisValue}\n              </p>\n              ${o}\n            </div>`
            }, l = o(7), s = [2e3, 5700, 3700, 5500, 8e3, 4e3, 5500], c = [10500, 9e3, 7e3, 9e3, 10400, 7500, 9300];
        if (i) {
            const o = t(i, "echarts"), d = window.echarts.init(i);
            echartSetOption(d, o, (() => ({
                color: [e("primary-200"), e("info-300")],
                tooltip: {
                    trigger: "axis",
                    padding: [7, 10],
                    backgroundColor: e("gray-100"),
                    borderColor: e("gray-300"),
                    textStyle: {color: e("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {type: "none"},
                    formatter: n
                },
                xAxis: {
                    type: "category",
                    data: l,
                    axisLabel: {
                        color: e("gray-900"),
                        formatter: e => window.dayjs(e).format("ddd"),
                        fontFamily: "Nunito Sans",
                        fontWeight: 400,
                        fontSize: 12.8,
                        margin: 16
                    },
                    axisLine: {lineStyle: {color: e("gray-200")}},
                    axisTick: !1
                },
                yAxis: {
                    type: "value",
                    splitLine: {lineStyle: {color: e("gray-200")}},
                    axisLabel: {
                        color: e("gray-900"),
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: 12.8,
                        margin: 24,
                        formatter: e => e / 1e3 + "k"
                    }
                },
                series: [{
                    name: "Revenue",
                    type: "bar",
                    barWidth: "16px",
                    label: {show: !1},
                    itemStyle: {color: r(e("primary-200"), e("primary")), borderRadius: [4, 4, 0, 0]},
                    data: c
                }, {
                    name: "Profit",
                    type: "line",
                    symbol: "circle",
                    symbolSize: 11,
                    itemStyle: {color: e("info-300"), borderColor: r(e("white"), e("dark")), borderWidth: 2},
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{offset: 0, color: a(e("info-300"), .2)}, {
                                offset: 1,
                                color: a(e("info-300"), .2)
                            }]
                        }
                    },
                    data: s
                }],
                grid: {right: "0", left: "0", bottom: 0, top: 10, containLabel: !0},
                animation: !1
            })));
        }
    };

    const callCampaignChartInit = () => {
        const {getColor: a, getData: o, getPastDates: t, rgbaColor: e} = window.phoenix.utils,
            i = document.querySelector(".echart-call-campaign"), r = (a, o = "MMM DD") => {
                let t = "";
                return a.forEach((a => {
                    t += `<div class='ms-1'>\n          <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${a.color}"></span>\n            ${a.seriesName} : ${"object" == typeof a.value ? a.value[1] : a.value}\n          </h6>\n        </div>`;
                })), `<div>\n              <p class='mb-2 text-600'>\n                ${window.dayjs(a[0].axisValue).isValid() ? window.dayjs(a[0].axisValue).format("DD MMM, YYYY") : a[0].axisValue}\n              </p>\n              ${t}\n            </div>`
            }, l = t(7), n = [8e3, 7700, 5900, 10100, 5100, 6e3, 4300];
        if (i) {
            const t = o(i, "echarts"), s = window.echarts.init(i);
            echartSetOption(s, t, (() => ({
                color: [a("primary-200"), a("info-300")],
                tooltip: {
                    trigger: "axis",
                    padding: [7, 10],
                    backgroundColor: a("gray-100"),
                    borderColor: a("gray-300"),
                    textStyle: {color: a("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {type: "none"},
                    formatter: r
                },
                xAxis: [{
                    type: "category",
                    data: l,
                    boundaryGap: !1,
                    splitLine: {show: !0, lineStyle: {color: a("gray-200")}},
                    axisLabel: {
                        color: a("gray-900"),
                        showMaxLabel: !1,
                        showMinLabel: !0,
                        align: "left",
                        formatter: a => window.dayjs(a).format("ddd"),
                        fontFamily: "Nunito Sans",
                        fontWeight: 400,
                        fontSize: 12.8,
                        margin: 16
                    },
                    axisLine: {lineStyle: {color: a("gray-200")}},
                    axisTick: !1
                }, {
                    type: "category",
                    data: l,
                    boundaryGap: !1,
                    splitLine: {show: !0, lineStyle: {color: a("gray-200")}},
                    axisLabel: {
                        color: a("gray-900"),
                        interval: 130,
                        showMaxLabel: !0,
                        showMinLabel: !1,
                        align: "right",
                        formatter: a => window.dayjs(a).format("ddd"),
                        fontFamily: "Nunito Sans",
                        fontWeight: 400,
                        fontSize: 12.8,
                        margin: 16
                    },
                    position: "bottom",
                    axisLine: {lineStyle: {color: a("gray-200")}},
                    axisTick: !1
                }],
                yAxis: {
                    type: "value",
                    axisLine: {lineStyle: {color: a("gray-200")}},
                    splitLine: {lineStyle: {color: a("gray-200")}},
                    axisLabel: {
                        color: a("gray-900"),
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: 12.8,
                        margin: 16,
                        formatter: a => a / 1e3 + "k"
                    }
                },
                series: [{
                    name: "Campaign",
                    type: "line",
                    smooth: .4,
                    symbolSize: 11,
                    itemStyle: {color: a("primary")},
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{offset: 0, color: e(a("primary-300"), .2)}, {
                                offset: 1,
                                color: e(a("primary-300"), .2)
                            }]
                        }
                    },
                    data: n
                }],
                grid: {right: "8", left: 6, bottom: "-10", top: 10, containLabel: !0},
                animation: !1
            })), {
                xs: {xAxis: [{}, {axisLabel: {showMaxLabel: !1}}]},
                sm: {xAxis: [{}, {axisLabel: {showMaxLabel: !0}}]}
            });
        }
    };

    const {docReady: docReady} = window.phoenix.utils;
    docReady(emailCampaignReportsChartInit), docReady(socialMarketingRadarChartInit), docReady(salesTrendsChartInit), docReady(callCampaignChartInit);

}));
//# sourceMappingURL=crm-analytics.js.map
