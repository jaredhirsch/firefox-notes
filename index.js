/*
 * This Source Code is subject to the terms of the Mozilla Public License
 * version 2.0 (the 'License'). You can obtain a copy of the License at
 * http://mozilla.org/MPL/2.0/.
 */

const sidebar = require('sdk/ui/sidebar').Sidebar({
  id: 'my-sidebar',
  title: 'Notes are fun wheeee 😂  ',
  url: require('sdk/self').data.url('sidebar.html')
});

// for now, just show it in the current window after 10 seconds
const { setTimeout } = require('sdk/timers');
setTimeout(() => {
  sidebar.show();
}, 10 * 1000);
