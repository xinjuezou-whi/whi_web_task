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
    const tooltipFormatter = (e, t = "MMM DD") => {
        let a = "";
        return e.forEach((e => {
            a += `<div class='ms-1'>\n        <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${e.borderColor ? e.borderColor : e.color}"></span>\n          ${e.seriesName} : ${"object" == typeof e.value ? e.value[1] : e.value}\n        </h6>\n      </div>`;
        })), `<div>\n            <p class='mb-2 text-600'>\n              ${window.dayjs(e[0].axisValue).isValid() ? window.dayjs(e[0].axisValue).format(t) : e[0].axisValue}\n            </p>\n            ${a}\n          </div>`
    };

    const contactsBySourceChartInit = () => {
        const {getColor: e, getData: t} = window.phoenix.utils,
            a = document.querySelector(".echart-contact-by-source-container"),
            r = a.querySelector(".echart-contact-by-source"), o = a.querySelector("[data-label]");
        if (r) {
            const a = t(r, "echarts"), i = window.echarts.init(r),
                n = [{value: 80, name: "Organic Search"}, {value: 65, name: "Paid Search"}, {
                    value: 40,
                    name: "Direct Traffic"
                }, {value: 220, name: "Social Media"}, {value: 120, name: "Referrals"}, {
                    value: 35,
                    name: "Others Campaigns"
                }], c = n.reduce(((e, t) => t.value + e), 0);
            o && (o.innerHTML = c);
            echartSetOption(i, a, (() => ({
                color: [e("primary"), e("success"), e("info"), e("info-300"), e("danger-200"), e("warning-300")],
                tooltip: {trigger: "item"},
                responsive: !0,
                maintainAspectRatio: !1,
                series: [{
                    name: "Contacts by Source",
                    type: "pie",
                    radius: ["55%", "90%"],
                    startAngle: 90,
                    avoidLabelOverlap: !1,
                    itemStyle: {borderColor: e("gray-soft"), borderWidth: 3},
                    label: {show: !1},
                    emphasis: {label: {show: !1}},
                    labelLine: {show: !1},
                    data: n
                }],
                grid: {bottom: 0, top: 0, left: 0, right: 0, containLabel: !1}
            })));
        }
    };

    const contactsCreatedChartInit = () => {
        const {getColor: t, getData: o, getPastDates: e} = window.phoenix.utils,
            r = document.querySelector(".echart-contacts-created"), a = e(9), i = [24, 14, 30, 24, 32, 32, 18, 12, 32],
            n = [36, 28, 36, 39, 54, 38, 22, 34, 52];
        if (r) {
            const e = o(r, "echarts"), l = echarts.init(r);
            echartSetOption(l, e, (() => ({
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
                    formatter: t => tooltipFormatter(t)
                },
                xAxis: {
                    type: "category",
                    axisLabel: {
                        color: t("gray-800"),
                        formatter: t => window.dayjs(t).format("D MMM, YY"),
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 10.24
                    },
                    splitLine: {show: !0, interval: "10", lineStyle: {color: t("gray-300")}},
                    show: !0,
                    interval: 10,
                    data: a,
                    axisLine: {lineStyle: {color: t("gray-300")}},
                    axisTick: !1
                },
                yAxis: {
                    axisPointer: {type: "none"},
                    position: "right",
                    axisTick: "none",
                    splitLine: {interval: 5, lineStyle: {color: t("gray-200")}},
                    axisLine: {show: !1},
                    axisLabel: {
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: 12.8,
                        color: t("gray-900"),
                        margin: 20,
                        verticalAlign: "bottom",
                        formatter: t => `${t.toLocaleString()}`
                    }
                },
                series: [{
                    name: "Actual revenue",
                    type: "bar",
                    data: i,
                    barWidth: "4px",
                    barGap: "3",
                    label: {show: !0, position: "top", color: t("gray-900"), fontWeight: "bold", fontSize: "10.24px"},
                    z: 10,
                    itemStyle: {borderRadius: [2, 2, 0, 0], color: t("gray-300")}
                }, {
                    name: "Projected revenue",
                    type: "bar",
                    barWidth: "4px",
                    data: n,
                    label: {show: !0, position: "top", color: t("primary"), fontWeight: "bold", fontSize: "10.24px"},
                    itemStyle: {borderRadius: [2, 2, 0, 0], color: t("primary")}
                }],
                grid: {right: 3, left: 6, bottom: 0, top: "5%", containLabel: !0},
                animation: !1
            })), {xs: {series: [{label: {show: !1}}, {label: {show: !1}}]}});
        }
    };

    const newUsersChartsInit = () => {
        const {getColor: o, getData: t, getPastDates: a, rgbaColor: e} = window.phoenix.utils,
            r = document.querySelector(".echarts-new-users"), i = o => {
                const t = window.dayjs(o[0].axisValue), a = window.dayjs(o[0].axisValue).subtract(1, "month"),
                    e = o.map(((o, e) => ({value: o.value, date: e > 0 ? a : t, color: o.color})));
                let r = "";
                return e.forEach(((o, t) => {
                    r += `<h6 class="fs--1 text-700 ${t > 0 && "mb-0"}"><span class="fas fa-circle me-2" style="color:${o.color}"></span>\n      ${o.date.format("MMM DD")} : ${o.value}\n    </h6>`;
                })), `<div class='ms-1'>\n              ${r}\n            </div>`
            };
        if (r) {
            const s = t(r, "echarts"), n = window.echarts.init(r), l = a(12);
            echartSetOption(n, s, (() => ({
                tooltip: {
                    trigger: "axis",
                    padding: 10,
                    backgroundColor: o("gray-100"),
                    borderColor: o("gray-300"),
                    textStyle: {color: o("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {type: "none"},
                    formatter: i
                },
                xAxis: [{
                    type: "category",
                    data: l,
                    show: !0,
                    boundaryGap: !1,
                    axisLine: {show: !1},
                    axisTick: {show: !1},
                    axisLabel: {
                        formatter: o => window.dayjs(o).format("DD MMM, YY"),
                        showMinLabel: !0,
                        showMaxLabel: !1,
                        color: o("gray-800"),
                        align: "left",
                        interval: 5,
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    }
                }, {
                    type: "category",
                    position: "bottom",
                    show: !0,
                    data: l,
                    axisLabel: {
                        formatter: o => window.dayjs(o).format("DD MMM, YY"),
                        interval: 130,
                        showMaxLabel: !0,
                        showMinLabel: !1,
                        color: o("gray-800"),
                        align: "right",
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    axisLine: {show: !1},
                    axisTick: {show: !1},
                    splitLine: {show: !1},
                    boundaryGap: !1
                }],
                yAxis: {show: !1, type: "value", boundaryGap: !1},
                series: [{
                    type: "line",
                    data: [220, 220, 150, 150, 150, 250, 250, 400, 400, 400, 300, 300],
                    lineStyle: {width: 2, color: o("info")},
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{offset: 0, color: e(o("info"), .2)}, {offset: 1, color: e(o("info"), 0)}]
                        }
                    },
                    showSymbol: !1,
                    symbol: "circle"
                }],
                grid: {left: 0, right: 0, top: 5, bottom: 20}
            })));
        }
    };

    const newLeadsChartsInit = () => {
        const {getColor: o, getData: t, getPastDates: a, rgbaColor: e} = window.phoenix.utils,
            r = document.querySelector(".echarts-new-leads"), i = o => {
                const t = window.dayjs(o[0].axisValue), a = window.dayjs(o[0].axisValue).subtract(1, "month"),
                    e = o.map(((o, e) => ({value: o.value, date: e > 0 ? a : t, color: o.color})));
                let r = "";
                return e.forEach(((o, t) => {
                    r += `<h6 class="fs--1 text-700 ${t > 0 && "mb-0"}"><span class="fas fa-circle me-2" style="color:${o.color}"></span>\n      ${o.date.format("MMM DD")} : ${o.value}\n    </h6>`;
                })), `<div class='ms-1'>\n              ${r}\n            </div>`
            };
        if (r) {
            const s = t(r, "echarts"), n = window.echarts.init(r), l = a(11);
            echartSetOption(n, s, (() => ({
                tooltip: {
                    trigger: "axis",
                    padding: 10,
                    backgroundColor: o("gray-100"),
                    borderColor: o("gray-300"),
                    textStyle: {color: o("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {type: "none"},
                    formatter: i
                },
                xAxis: [{
                    type: "category",
                    data: l,
                    show: !0,
                    boundaryGap: !1,
                    axisLine: {show: !1},
                    axisTick: {show: !1},
                    axisLabel: {
                        formatter: o => window.dayjs(o).format("DD MMM, YY"),
                        showMinLabel: !0,
                        showMaxLabel: !1,
                        color: o("gray-800"),
                        align: "left",
                        interval: 5,
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    }
                }, {
                    type: "category",
                    position: "bottom",
                    show: !0,
                    data: l,
                    axisLabel: {
                        formatter: o => window.dayjs(o).format("DD MMM, YY"),
                        interval: 130,
                        showMaxLabel: !0,
                        showMinLabel: !1,
                        color: o("gray-800"),
                        align: "right",
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    axisLine: {show: !1},
                    axisTick: {show: !1},
                    splitLine: {show: !1},
                    boundaryGap: !1
                }],
                yAxis: {show: !1, type: "value", boundaryGap: !1},
                series: [{
                    type: "line",
                    data: [100, 100, 260, 250, 270, 160, 190, 180, 260, 200, 220],
                    lineStyle: {width: 2, color: o("primary")},
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{offset: 0, color: e(o("primary"), .2)}, {
                                offset: 1,
                                color: e(o("primary"), 0)
                            }]
                        }
                    },
                    showSymbol: !1,
                    symbol: "circle"
                }],
                grid: {left: 0, right: 0, top: 5, bottom: 20}
            })));
        }
    };

    const addClicksChartInit = () => {
        const {getColor: t, getData: o, getPastDates: e, getItemFromStore: a} = window.phoenix.utils,
            i = document.querySelector(".echart-add-clicks-chart"), r = e(11),
            n = [2e3, 2250, 1070, 1200, 1e3, 1450, 3100, 2900, 1800, 1450, 1700],
            l = [1100, 1200, 2700, 1700, 2100, 2e3, 2300, 1200, 2600, 2900, 1900], s = t => {
                const o = window.dayjs(t[0].axisValue), e = window.dayjs(t[0].axisValue).subtract(1, "month"),
                    a = t.map(((t, a) => ({value: t.value, date: a > 0 ? e : o, color: t.color})));
                let i = "";
                return a.forEach(((t, o) => {
                    i += `<h6 class="fs--1 text-700 ${o > 0 && "mb-0"}"><span class="fas fa-circle me-2" style="color:${t.color}"></span>\n      ${t.date.format("MMM DD")} : ${t.value}\n    </h6>`;
                })), `<div class='ms-1'>\n              ${i}\n            </div>`
            };
        if (i) {
            const e = o(i, "echarts"), y = window.echarts.init(i);
            echartSetOption(y, e, (() => ({
                tooltip: {
                    trigger: "axis",
                    padding: 10,
                    backgroundColor: t("gray-100"),
                    borderColor: t("gray-300"),
                    textStyle: {color: t("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {type: "none"},
                    formatter: s
                },
                xAxis: [{
                    type: "category",
                    data: r,
                    axisLabel: {
                        formatter: t => window.dayjs(t).format("DD MMM, YY"),
                        interval: 3,
                        showMinLabel: !0,
                        showMaxLabel: !1,
                        color: t("gray-800"),
                        align: "left",
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: 12.8,
                        margin: 15
                    },
                    axisLine: {show: !0, lineStyle: {color: t("gray-300")}},
                    axisTick: {show: !0, interval: 5},
                    boundaryGap: !1
                }, {
                    type: "category",
                    position: "bottom",
                    data: r,
                    axisLabel: {
                        formatter: t => window.dayjs(t).format("DD MMM, YY"),
                        interval: 130,
                        showMaxLabel: !0,
                        showMinLabel: !1,
                        color: t("gray-900"),
                        align: "right",
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: 12.8,
                        margin: 15
                    },
                    axisLine: {show: !0, lineStyle: {color: t("gray-300")}},
                    axisTick: {show: !0},
                    splitLine: {show: !1},
                    boundaryGap: !1
                }],
                yAxis: {
                    axisPointer: {type: "none"},
                    axisTick: "none",
                    splitLine: {
                        show: !0,
                        lineStyle: {color: "dark" === a("phoenixTheme") ? t("gray-100") : t("gray-200")}
                    },
                    axisLine: {show: !1},
                    axisLabel: {
                        show: !0,
                        fontFamily: "Nunito Sans",
                        fontWeight: 700,
                        fontSize: 12.8,
                        color: t("gray-900"),
                        margin: 25,
                        formatter: t => t / 1e3 + "k"
                    }
                },
                series: [{
                    name: "e",
                    type: "line",
                    data: l,
                    lineStyle: {type: "line", width: 3, color: t("info-200")},
                    showSymbol: !1,
                    symbol: "emptyCircle",
                    symbolSize: 6,
                    itemStyle: {color: t("info-200"), borderWidth: 3}
                }, {
                    name: "d",
                    type: "line",
                    data: n,
                    showSymbol: !1,
                    symbol: "emptyCircle",
                    symbolSize: 6,
                    itemStyle: {color: t("primary"), borderWidth: 3},
                    lineStyle: {type: "line", width: 3, color: t("primary")}
                }],
                grid: {right: 2, left: 5, bottom: "10px", top: "2%", containLabel: !0},
                animation: !1
            })));
        }
    };

    const echartsLeadConversiontInit = () => {
        const {getColor: e, getData: o, getPastDates: r} = window.phoenix.utils,
            i = document.querySelector(".echart-lead-conversion"), t = r(4);
        if (i) {
            const r = o(i, "echarts"), a = echarts.init(i);
            echartSetOption(a, r, (() => ({
                color: [e("primary"), e("gray-300")],
                tooltip: {
                    trigger: "axis",
                    padding: [7, 10],
                    backgroundColor: e("gray-100"),
                    borderColor: e("gray-300"),
                    textStyle: {color: e("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {type: "none"},
                    formatter: e => (e => {
                        let o = "";
                        return e.forEach((e => {
                            o += `<h6 class="fs--1 text-700 mb-0"><span class="fas fa-circle me-2" style="color:${e.color}"></span>\n      ${e.axisValue} : ${e.value}\n    </h6>`;
                        })), `<div class='ms-1'>\n              ${o}\n            </div>`
                    })(e)
                },
                xAxis: {
                    type: "value",
                    inverse: !0,
                    axisLabel: {show: !1},
                    show: !1,
                    data: t,
                    axisLine: {lineStyle: {color: e("gray-300")}},
                    axisTick: !1
                },
                yAxis: {
                    data: ["Closed Won", "Objection", "Offer", "Qualify Lead", "Created"],
                    type: "category",
                    axisPointer: {type: "none"},
                    axisTick: "none",
                    splitLine: {interval: 5, lineStyle: {color: e("gray-200")}},
                    axisLine: {show: !1},
                    axisLabel: {show: !0, align: "left", margin: 100, color: e("gray-900")}
                },
                series: {
                    name: "Lead Conversion",
                    type: "bar",
                    barWidth: "20px",
                    showBackground: !0,
                    data: [{
                        value: 1060,
                        itemStyle: {color: e("success-200"), borderRadius: [4, 0, 0, 4]},
                        emphasis: {
                            itemStyle: {color: e("success-300")},
                            label: {formatter: () => "{b| 53% }", rich: {b: {color: e("white")}}}
                        },
                        label: {
                            show: !0,
                            position: "inside",
                            formatter: () => "{b| 53%}",
                            rich: {b: {color: e("success-600"), fontWeight: 500, padding: [0, 5, 0, 0]}}
                        }
                    }, {
                        value: 1200,
                        itemStyle: {color: e("info-200"), borderRadius: [4, 0, 0, 4]},
                        emphasis: {
                            itemStyle: {color: e("info-300")},
                            label: {formatter: () => "{b| 60% }", rich: {b: {color: e("white")}}}
                        },
                        label: {
                            show: !0,
                            position: "inside",
                            formatter: () => "{b| 60%}",
                            rich: {b: {color: e("info-600"), fontWeight: 500, padding: [0, 5, 0, 0]}}
                        }
                    }, {
                        value: 1600,
                        itemStyle: {color: e("primary-200"), borderRadius: [4, 0, 0, 4]},
                        emphasis: {
                            itemStyle: {color: e("primary-300")},
                            label: {formatter: () => "{b| 80% }", rich: {b: {color: e("white")}}}
                        },
                        label: {
                            show: !0,
                            position: "inside",
                            formatter: () => "{b| 80% }",
                            rich: {b: {color: e("primary-600"), fontWeight: 500, padding: [0, 5, 0, 0]}}
                        }
                    }, {
                        value: 1800,
                        itemStyle: {color: e("warning-200"), borderRadius: [4, 0, 0, 4]},
                        emphasis: {
                            itemStyle: {color: e("warning-300")},
                            label: {formatter: () => "{b| 90% }", rich: {b: {color: e("white")}}}
                        },
                        label: {
                            show: !0,
                            position: "inside",
                            formatter: () => "{b|90%}",
                            rich: {b: {color: e("warning-600"), fontWeight: 500, padding: [0, 5, 0, 0]}}
                        }
                    }, {
                        value: 2e3,
                        itemStyle: {color: e("danger-200"), borderRadius: [4, 0, 0, 4]},
                        emphasis: {
                            itemStyle: {color: e("danger-300")},
                            label: {formatter: e => `{a|${e.value}}`, rich: {a: {color: e("white")}}}
                        },
                        label: {
                            show: !0,
                            position: "inside",
                            formatter: e => `{a|${e.value}}`,
                            rich: {a: {color: e("danger-600"), fontWeight: 500}}
                        }
                    }],
                    barGap: "50%"
                },
                grid: {right: 5, left: 100, bottom: 0, top: "5%", containLabel: !1},
                animation: !1
            })), {xs: {yAxis: {show: !1}, grid: {left: 0}}, sm: {yAxis: {show: !0}, grid: {left: 100}}});
        }
    };

    const echartsRevenueTargetInit = () => {
        const {getColor: e, getData: a} = window.phoenix.utils,
            t = document.querySelector(".echart-revenue-target-conversion"), r = [42e3, 35e3, 35e3, 4e4],
            o = [30644, 33644, 28644, 38644];
        if (t) {
            const i = a(t, "echarts"), n = window.echarts.init(t);
            echartSetOption(n, i, (() => ({
                color: [e("primary"), e("gray-300")],
                tooltip: {
                    trigger: "axis",
                    padding: [7, 10],
                    backgroundColor: e("gray-100"),
                    borderColor: e("gray-300"),
                    textStyle: {color: e("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    axisPointer: {type: "none"},
                    formatter: e => ((e = "MMM DD") => {
                        let a = "";
                        return e.forEach((e => {
                            a += `<div class='ms-1'>\n          <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${e.color}"></span>\n            ${e.seriesName} : $${e.value}\n          </h6>\n        </div>`;
                        })), `<div>\n              <p class='mb-2 text-600'>\n                ${e[0].axisValue}\n              </p>\n              ${a}\n            </div>`
                    })(e)
                },
                xAxis: {
                    type: "value",
                    axisLabel: {
                        show: !0,
                        interval: 3,
                        showMinLabel: !0,
                        showMaxLabel: !1,
                        color: e("gray-500"),
                        align: "left",
                        fontFamily: "Nunito Sans",
                        fontWeight: 400,
                        fontSize: 12.8,
                        margin: 10,
                        formatter: e => e / 1e3 + "k"
                    },
                    show: !0,
                    axisLine: {lineStyle: {color: e("gray-300")}},
                    axisTick: !1,
                    splitLine: {show: !1}
                },
                yAxis: {
                    data: ["Luxemburg", "Canada", "Australia", "India"],
                    type: "category",
                    axisPointer: {type: "none"},
                    axisTick: "none",
                    splitLine: {interval: 5, lineStyle: {color: e("gray-200")}},
                    axisLine: {show: !1},
                    axisLabel: {show: !0, margin: 21, color: e("gray-900")}
                },
                series: [{
                    name: "Target",
                    type: "bar",
                    label: {show: !1},
                    emphasis: {disabled: !0},
                    showBackground: !0,
                    backgroundStyle: {color: e("gray-100")},
                    barWidth: "30px",
                    barGap: "-100%",
                    data: r,
                    itemStyle: {borderWidth: 4, color: e("gray-200"), borderColor: e("gray-200")}
                }, {
                    name: "Gained",
                    type: "bar",
                    emphasis: {disabled: !0},
                    label: {
                        show: !0,
                        color: e("white"),
                        fontWeight: 700,
                        fontFamily: "Nunito Sans",
                        fontSize: 12.8,
                        formatter: e => `$${e.value.toLocaleString()}`
                    },
                    backgroundStyle: {color: e("gray-100")},
                    barWidth: "30px",
                    data: o,
                    itemStyle: {borderWidth: 4, color: e("primary-300"), borderColor: e("gray-200")}
                }],
                grid: {right: 0, left: 0, bottom: 8, top: 0, containLabel: !0},
                animation: !1
            })));
        }
    };

    const {docReady: docReady} = window.phoenix.utils;
    docReady(contactsBySourceChartInit), docReady(contactsCreatedChartInit), docReady(newUsersChartsInit), docReady(newLeadsChartsInit), docReady(addClicksChartInit), docReady(echartsLeadConversiontInit), docReady(echartsRevenueTargetInit);

}));
//# sourceMappingURL=crm-dashboard.js.map
