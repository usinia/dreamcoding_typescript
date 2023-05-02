"use strict";
// motion
// type : image, video, note, task
// add, list, delete
// draggable
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var MotionImpl = /** @class */ (function () {
    function MotionImpl(list) {
        this.list = list;
    }
    MotionImpl.prototype.add = function (note) {
        var n = __assign({ id: this.list.length }, note);
        this.list.push(n);
        return n;
    };
    MotionImpl.prototype.remove = function (id) {
        this.list = this.list.filter(function (v) { return v && v.id !== id; });
    };
    MotionImpl.prototype.getList = function () {
        return this.list;
    };
    return MotionImpl;
}());
// list & class
var motions = [];
var actor = new MotionImpl(motions);
var noteType;
// function
var layerToggle = function () {
    var layer = document.querySelector(".popup");
    if (layer.style.display === "block")
        layer.style.display = "none";
    else
        layer.style.display = "block";
};
var showLayer = function (type) {
    noteType = type;
    layerToggle();
    var content = document.querySelector(".popup .layer .title span.content");
    switch (type) {
        case "image":
        case "video":
            content.innerText = "URL";
            return;
        case "note":
        case "task":
            content.innerText = "BODY";
            return;
        default:
            var invalid = type;
            throw new Error(invalid + " type is invalid");
    }
};
var add = function () {
    var title = (document.querySelector('[name="title"]')).value;
    var content = document.querySelector('[name="content"]').value;
    if (title && content) {
        var note = {
            type: noteType,
            title: title,
            content: content,
        };
        note = actor.add(note);
        draw(note);
        layerToggle();
    }
};
var remove = function (id) {
    actor.remove(id);
    var dom = document.querySelector(".note" + id);
    if (dom)
        dom.remove();
};
var draw = function (note) {
    var list = document.querySelector(".list");
    var dom = document.createElement("div");
    dom.classList.add(note.type, "note" + note.id);
    dom.innerHTML = note.type + " " + note.title + " & " + note.content + " <span onclick=\"remove(" + note.id + ")\">" + note.id + " x</span>";
    list.appendChild(dom);
};
//# sourceMappingURL=main.js.map