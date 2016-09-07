/* global $, APP, interfaceConfig, JitsiMeetJS */
import UIUtil from '../util/UIUtil';
import UIEvents from '../../../service/UI/UIEvents';
import DefaultBottomToolbarButtons from './DefaultBottomToolbarButtons';

const BottomToolbar = {
    init () {
        this.toolbar = $('#bottomToolbar');

        // The bottom toolbar is enabled by default.
        this.enabled = true;
    },
    /**
     * Enables / disables the bottom toolbar.
     * @param {e} set to {true} to enable the bottom toolbar or {false}
     * to disable it
     */
    enable (e) {
        this.enabled = e;
        if (!e && this.isVisible())
            this.hide(false);
    },
    /**
     * Indicates if the bottom toolbar is currently enabled.
     * @return {this.enabled}
     */
    isEnabled() {
        return this.enabled;
    },

    setupListeners (emitter) {
        UIUtil.hideDisabledButtons(DefaultBottomToolbarButtons);

        const buttonHandlers = {
            "bottom_toolbar_contact_list": function () {
                JitsiMeetJS.analytics.sendEvent(
                    'bottomtoolbar.contacts.toggled');
                emitter.emit(UIEvents.TOGGLE_CONTACT_LIST);
            },
            "bottom_toolbar_film_strip": function () {
                JitsiMeetJS.analytics.sendEvent(
                    'bottomtoolbar.filmstrip.toggled');
                emitter.emit(UIEvents.TOGGLE_FILM_STRIP);
            },
            "bottom_toolbar_chat": function () {
                JitsiMeetJS.analytics.sendEvent('bottomtoolbar.chat.toggled');
                emitter.emit(UIEvents.TOGGLE_CHAT);
            }
        };

        Object.keys(DefaultBottomToolbarButtons).forEach(
                id => {
                if (UIUtil.isButtonEnabled(id)) {
                    let button = DefaultBottomToolbarButtons[id];
                    let idName = button.id.slice(1);
                    let buttonElement = document.getElementById(idName);

                    UIUtil.setTooltip(buttonElement, button.key, 'top-left');

                    if (button.shortcut)
                        APP.keyboardshortcut.registerShortcut(
                            button.shortcut,
                            button.shortcutAttr,
                            button.shortcutFunc,
                            button.shortcutDescription
                        );
                }
            }
        );

        Object.keys(buttonHandlers).forEach(
            buttonId => $(`#${buttonId}`).click(buttonHandlers[buttonId])
        );
    },

    resizeToolbar (thumbWidth, thumbHeight) {
        let bottom = (thumbHeight - this.toolbar.outerHeight())/2 + 30;
        this.toolbar.css({bottom});
    },

    /**
     * Returns true if this toolbar is currently visible, or false otherwise.
     * @return <tt>true</tt> if currently visible, <tt>false</tt> - otherwise
     */
    isVisible() {
        return this.toolbar.is(":visible");
    },

    /**
     * Hides the bottom toolbar with animation or not depending on the animate
     * parameter.
     * @param animate <tt>true</tt> to hide the bottom toolbar with animation,
     * <tt>false</tt> or nothing to hide it without animation.
     */
    hide(animate) {
        if (animate)
            this.toolbar.hide("slide", {direction: "right", duration: 300});
        else
            this.toolbar.css("display", "none");
    },

    /**
     * Shows the bottom toolbar with animation or not depending on the animate
     * parameter.
     * @param animate <tt>true</tt> to show the bottom toolbar with animation,
     * <tt>false</tt> or nothing to show it without animation.
     */
    show(animate) {
        if (animate)
            this.toolbar.show("slide", {direction: "right", duration: 300});
        else
            this.toolbar.css("display", "block");
    }
};

export default BottomToolbar;
