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

    const issuesDiscoveredChartInit = () => {
        const {getColor: e, getData: t} = window.phoenix.utils, i = document.querySelector(".echart-issue-chart");
        if (i) {
            const a = t(i, "echarts"), o = window.echarts.init(i);
            echartSetOption(o, a, (() => ({
                color: [e("info-300"), e("warning-300"), e("danger-300"), e("success-300"), e("primary")],
                tooltip: {trigger: "item"},
                responsive: !0,
                maintainAspectRatio: !1,
                series: [{
                    name: "Tasks assigned to me",
                    type: "pie",
                    radius: ["48%", "90%"],
                    startAngle: 30,
                    avoidLabelOverlap: !1,
                    label: {
                        show: !1,
                        position: "center",
                        formatter: "{x|{d}%} \n {y|{b}}",
                        rich: {
                            x: {fontSize: 31.25, fontWeight: 800, color: e("gray-700"), padding: [0, 0, 5, 15]},
                            y: {fontSize: 12.8, color: e("gray-700"), fontWeight: 600}
                        }
                    },
                    emphasis: {label: {show: !0}},
                    labelLine: {show: !1},
                    data: [{value: 78, name: "Product design"}, {value: 63, name: "Development"}, {
                        value: 56,
                        name: "QA & Testing"
                    }, {value: 36, name: "Customer queries"}, {value: 24, name: "R & D"}]
                }],
                grid: {bottom: 0, top: 0, left: 0, right: 0, containLabel: !1}
            })));
        }
    };

    const zeroBurnOutChartInit = () => {
        const {getColor: t, getData: e, getPastDates: o} = window.phoenix.utils,
            a = document.querySelector(".echart-zero-burnout-chart");
        if (a) {
            const i = e(a, "echarts"), r = window.echarts.init(a);
            echartSetOption(r, i, (() => ({
                color: [t("gray-400"), t("success"), t("info"), t("warning")],
                tooltip: {
                    trigger: "axis",
                    backgroundColor: t("gray-soft"),
                    borderColor: t("gray-200"),
                    formatter: t => tooltipFormatter(t, "MMM DD, YYYY"),
                    axisPointer: {shadowStyle: {color: "red"}}
                },
                legend: {
                    bottom: "10",
                    data: [{name: "Open", icon: "roundRect"}, {
                        name: "Issues found",
                        icon: "roundRect"
                    }, {name: "In Progress", icon: "roundRect"}],
                    itemWidth: 16,
                    itemHeight: 8,
                    itemGap: 10,
                    inactiveColor: t("gray-500"),
                    inactiveBorderWidth: 0,
                    textStyle: {color: t("gray-900"), fontWeight: 600, fontSize: 16, fontFamily: "Nunito Sans"}
                },
                xAxis: [{
                    show: !0,
                    interval: 2,
                    axisLine: {lineStyle: {type: "solid", color: t("gray-300")}},
                    axisLabel: {
                        color: t("gray-900"),
                        formatter: t => window.dayjs(t).format("D MMM"),
                        interval: 5,
                        align: "left",
                        margin: 20,
                        fontSize: 12.8
                    },
                    axisTick: {show: !0, length: 15},
                    splitLine: {interval: 0, show: !0, lineStyle: {color: t("gray-300"), type: "dashed"}},
                    type: "category",
                    boundaryGap: !1,
                    data: o(15)
                }, {
                    show: !0,
                    interval: 2,
                    axisLine: {show: !1},
                    axisLabel: {show: !1},
                    axisTick: {show: !1},
                    splitLine: {interval: 1, show: !0, lineStyle: {color: t("gray-300"), type: "solid"}},
                    boundaryGap: !1,
                    data: o(15)
                }],
                yAxis: {
                    show: !0,
                    type: "value",
                    axisLine: {lineStyle: {type: "solid", color: t("gray-300")}},
                    axisLabel: {color: t("gray-900"), margin: 20, fontSize: 12.8, interval: 0},
                    splitLine: {show: !0, lineStyle: {color: t("gray-300"), type: "solid"}},
                    axisTick: {show: !0, length: 15, alignWithLabel: !0, lineStyle: {color: t("gray-300")}}
                },
                series: [{
                    name: "Estimated",
                    type: "line",
                    symbol: "none",
                    data: [20, 17.5, 15, 15, 15, 12.5, 10, 7.5, 5, 2.5, 2.5, 2.5, 0],
                    lineStyle: {width: 0},
                    areaStyle: {color: t("primary-300"), opacity: .075},
                    tooltip: {show: !1}
                }, {name: "Issues found", type: "line", symbolSize: 6, data: [3, 1, 2, 4, 3, 1]}, {
                    name: "Open",
                    type: "line",
                    symbolSize: 6,
                    data: [6, 5, 4, 6, 5, 5]
                }, {name: "In Progress", type: "line", symbolSize: 6, data: [11, 12, 11, 9, 11, 6]}, {
                    name: "Actual",
                    type: "line",
                    symbolSize: 6,
                    data: [20, 19, 15, 14, 12, 8],
                    lineStyle: {type: "dashed"}
                }],
                grid: {right: 5, left: 0, bottom: "15%", top: 20, containLabel: !0}
            })));
        }
    };

    const zeroRoadmapChartInit = () => {
        const {getItemFromStore: t} = window.phoenix.utils, e = document.querySelector(".gantt-zero-roadmap");
        if (e) {
            const a = e.querySelector(".gantt-zero-roadmap-chart");
            window.gantt.plugins({tooltip: !0}), window.gantt.config.date_format = "%Y-%m-%d %H:%i", window.gantt.config.scale_height = 0, window.gantt.config.row_height = 36, window.gantt.config.bar_height = 12, window.gantt.config.drag_move = !1, window.gantt.config.drag_progress = !1, window.gantt.config.drag_resize = !1, window.gantt.config.drag_links = !1, window.gantt.config.details_on_dblclick = !1, window.gantt.config.click_drag = !1, t("phoenixIsRTL") && (window.gantt.config.rtl = !0);
            const n = {
                levels: [{
                    name: "month",
                    scales: [{unit: "month", format: "%F, %Y"}, {unit: "week", format: "Week #%W"}]
                }, {name: "year", scales: [{unit: "year", step: 1, format: "%Y"}]}, {
                    name: "week",
                    scales: [{
                        unit: "week", step: 1, format: t => {
                            const e = window.gantt.date.date_to_str("%d %M"), a = window.gantt.date.add(t, -6, "day");
                            return "#" + window.gantt.date.date_to_str("%W")(t) + ", " + e(t) + " - " + e(a)
                        }
                    }, {unit: "day", step: 1, format: "%j %D"}]
                }]
            };
            gantt.ext.zoom.init(n), gantt.ext.zoom.setLevel("week"), gantt.ext.zoom.attachEvent("onAfterZoom", (function (t, e) {
                document.querySelector("input[value='" + e.name + "']").checked = !0;
            })), gantt.config.columns = [{
                name: "text",
                width: 56,
                resize: !0
            }], gantt.templates.task_class = (t, e, a) => a.task_class, gantt.templates.task_cell_class = function (t, e) {
                return "weekend"
            }, gantt.templates.task_text = () => "", window.gantt.init(a), window.gantt.parse({
                data: [{
                    id: 1,
                    text: "Planning",
                    start_date: "2019-08-01 00:00",
                    duration: 3,
                    progress: 1,
                    task_class: "planning"
                }, {
                    id: 2,
                    text: "Research",
                    start_date: "2019-08-02 00:00",
                    duration: 5,
                    progress: .5,
                    task_class: "research"
                }, {
                    id: 3,
                    text: "Design",
                    start_date: "2019-08-02 00:00",
                    duration: 10,
                    progress: .4,
                    task_class: "design"
                }, {
                    id: 4,
                    text: "Review",
                    start_date: "2019-08-05 00:00",
                    duration: 5,
                    progress: .8,
                    task_class: "review"
                }, {
                    id: 5,
                    text: "Develop",
                    start_date: "2019-08-06 00:00",
                    duration: 10,
                    progress: .3,
                    open: !0,
                    task_class: "develop"
                }, {
                    id: 6,
                    text: "Review II",
                    start_date: "2019-08-10 00:00",
                    duration: 4,
                    progress: .02,
                    task_class: "review-2"
                }],
                links: [{id: 1, source: 1, target: 2, type: "0"}, {id: 2, source: 1, target: 3, type: "0"}, {
                    id: 3,
                    source: 3,
                    target: 4,
                    type: "0"
                }, {id: 4, source: 6, target: 5, type: "3"}]
            });
            const o = e.querySelectorAll("input[name=scaleView]"), i = e.querySelector("[data-gantt-progress]"),
                s = e.querySelector("[data-gantt-links]");
            o.forEach((t => {
                t.addEventListener("click", (t => {
                    window.gantt.ext.zoom.setLevel(t.target.value);
                }));
            })), s.addEventListener("change", (t => {
                window.gantt.config.show_links = t.target.checked, window.gantt.init(a);
            })), i.addEventListener("change", (t => {
                window.gantt.config.show_progress = t.target.checked, window.gantt.init(a);
            }));
        }
    };

    const {docReady: docReady} = window.phoenix.utils;
    docReady(zeroRoadmapChartInit), docReady(zeroBurnOutChartInit), docReady(issuesDiscoveredChartInit);

}));
//# sourceMappingURL=projectmanagement-dashboard.js.map
