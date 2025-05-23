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

    const completedTaskChartInit = () => {
        const {getColor: t, getData: o, getDates: a} = window.phoenix.utils,
            e = document.querySelector(".echart-completed-task-chart"),
            i = a(new Date("5/1/2022"), new Date("5/30/2022"), 864e5),
            n = [50, 115, 180, 180, 180, 150, 120, 120, 120, 120, 120, 240, 240, 240, 240, 270, 300, 330, 360, 390, 340, 290, 310, 330, 350, 320, 290, 330, 370, 350],
            r = [130, 130, 130, 90, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 110, 170, 230, 230, 230, 270, 310, 270, 230, 260, 290, 320, 280, 280, 280],
            s = t => {
                const o = window.dayjs(t[0].axisValue), a = window.dayjs(t[0].axisValue).subtract(1, "month"),
                    e = t.map(((t, e) => ({value: t.value, date: e > 0 ? a : o, color: t.color})));
                let i = "";
                return e.forEach(((t, o) => {
                    i += `<h6 class="fs--1 text-700 ${o > 0 && "mb-0"}"><span class="fas fa-circle me-2" style="color:${t.color}"></span>\n      ${t.date.format("MMM DD")} : ${t.value}\n    </h6>`;
                })), `<div class='ms-1'>\n              ${i}\n            </div>`
            };
        if (e) {
            const a = o(e, "echarts"), l = window.echarts.init(e);
            echartSetOption(l, a, (() => ({
                color: [t("primary"), t("info")],
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
                    data: i,
                    axisLabel: {
                        formatter: t => window.dayjs(t).format("DD MMM"),
                        interval: 13,
                        showMinLabel: !0,
                        showMaxLabel: !1,
                        color: t("gray-800"),
                        align: "left",
                        fontFamily: "Nunito Sans",
                        fontWeight: 600,
                        fontSize: 12.8
                    },
                    axisLine: {show: !0, lineStyle: {color: t("gray-200")}},
                    axisTick: {show: !1},
                    splitLine: {show: !0, interval: 0, lineStyle: {color: t("gray-200")}},
                    boundaryGap: !1
                }, {
                    type: "category",
                    position: "bottom",
                    data: i,
                    axisLabel: {
                        formatter: t => window.dayjs(t).format("DD MMM"),
                        interval: 130,
                        showMaxLabel: !0,
                        showMinLabel: !1,
                        color: t("gray-800"),
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
                yAxis: {
                    position: "right",
                    axisPointer: {type: "none"},
                    axisTick: "none",
                    splitLine: {show: !1},
                    axisLine: {show: !1},
                    axisLabel: {show: !1}
                },
                series: [{name: "d", type: "line", data: n, showSymbol: !1, symbol: "circle"}, {
                    name: "e",
                    type: "line",
                    data: r,
                    lineStyle: {type: "dashed", width: 1, color: t("info")},
                    showSymbol: !1,
                    symbol: "circle"
                }],
                grid: {right: 2, left: 5, bottom: "20px", top: "2%", containLabel: !1},
                animation: !1
            })));
        }
    };

    const {echarts: echarts$1} = window, topCouponsChartInit = () => {
        const {getData: t, getColor: e} = window.phoenix.utils, o = document.querySelector(".echart-top-coupons");
        if (o) {
            const r = t(o, "options"), a = echarts$1.init(o);
            echartSetOption(a, r, (() => ({
                color: [e("primary"), e("primary-200"), e("info-500")],
                tooltip: {
                    trigger: "item",
                    padding: [7, 10],
                    backgroundColor: e("gray-100"),
                    borderColor: e("gray-300"),
                    textStyle: {color: e("dark")},
                    borderWidth: 1,
                    transitionDuration: 0,
                    formatter: t => `<strong>${t.data.name}:</strong> ${t.percent}%`
                },
                legend: {show: !1},
                series: [{
                    name: "72%",
                    type: "pie",
                    radius: ["100%", "87%"],
                    avoidLabelOverlap: !1,
                    emphasis: {scale: !1, itemStyle: {color: "inherit"}},
                    itemStyle: {borderWidth: 2, borderColor: e("white")},
                    label: {show: !0, position: "center", formatter: "{a}", fontSize: 23, color: e("dark")},
                    data: [{value: 72e5, name: "Percentage discount"}, {
                        value: 18e5,
                        name: "Fixed card discount"
                    }, {value: 1e6, name: "Fixed product discount"}]
                }],
                grid: {containLabel: !0}
            })));
        }
    };

    const {docReady: docReady} = window.phoenix.utils;
    docReady(completedTaskChartInit), docReady(topCouponsChartInit);

}));
//# sourceMappingURL=project-details.js.map
