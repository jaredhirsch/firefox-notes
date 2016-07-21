/*
 * This Source Code is subject to the terms of the Mozilla Public License
 * version 2.0 (the 'License'). You can obtain a copy of the License at
 * http://mozilla.org/MPL/2.0/.
 */

const sidebar = require('sdk/ui/sidebar').Sidebar({
  id: 'ffnotes-sidebar',
  title: 'Notes are fun wheeee 😂  ',
  url: require('sdk/self').data.url('sidebar.html')
});

// menubar button toggles visibility of notes sidebar
const toggleButton = require('sdk/ui').ToggleButton({
  id: 'ffnotes-btn',
  label: 'Toggle Firefox Notes sidebar',
  icon: {
    '16': './ff-notes-16.png',
    '32': './ff-notes-32.png'
  },
  // implicitly tracking state in the UI, for the moment
  onChange: (state) => {
    state.checked ? sidebar.show() : sidebar.hide();
  }
});
