# firefox-notes

## Firefox Notes: take notes, self-publish notes using a web server in FF, and learn to code along the way

### Basic mode: take notes as you browse the web
- Rich text editor in a sidebar
- Saved as HTML files
  - notes are partials inserted inside a default styled page template; basic mode users only edit content inside a container element
- Really nice default print stylesheet, make it easy for non-techie people to share their notes
  - particularly important: resize and put nice borders around copy-pasted content from websites (pageshot tech?)
- Manage notes from `about:notes` page (full-text search?)
- Toggle between sidebar and full-page editor view
  - from sidebar, click an 'open in tab' button to move editor to a new tab
  - from address bar, type the note URL in the address bar to get full page editor, click 'open in sidebar' to move to sidebar and close tab
- Places integration: notes have URLs, so they will show up in history & awesomebar search & activity stream
- Privacy story: local by default
- Cloud backups: link the notes dir to a cloud storage provider (total user choice)
- Security story: use third-party tools to encrypt the files on disk (total user choice)
- Bridge to open source: HTML files in a directory, would be easy to turn into a git repo (SUMO page or programmatically)

### **Hacker mode**: full-fledged html/js/css editor using devtools as an IDE
- Click a 'hacker mode' button to switch from simple text input to devtools IDE
- Newb hackers could edit the default page styles / template, or add third-party snippets for comments, social sharing, analytics, ads
- Intermediate hackers could add jQuery and various jQuery plugins to change the notes' behavior
- Advanced hackers could use a single-page framework like React to serve notes
- Help menu: integrate Mozilla Learning content
- The name **hacker mode** is important: we are reappropriating the term and restoring its original meaning. Hacking is about tinkering: harmless learning, creativity, fun. The name will create buzz in the short term, and hopefully help reshape the connotations of the word 'hacker' in the long term.

### Free self-publishing: notes are HTML, so serve them from Firefox
- Integrate a simple HTTPS web server (there's a web server in FF: [httpd.js](https://dxr.mozilla.org/mozilla-central/source/netwerk/test/httpserver/))
- UI to mark notes as public
- network configuration to open ports seems hard; UI wizard/flow to investigate network configuration could at least help users get started
- User-friendly domain registration: HTTPS everywhere + domain registrar integration/DNS configuration


That's it for the major features :-)

### Other stuff

#### Integration with other Firefox features / Mozilla projects:
- Context graph (browser search / history): register `notes:` custom protocol with urlbar
  - Notes are addressable local web pages with URLs like `notes:Summer Travel Planning`
  - Notes are HTML, so editing notes will create visits in browser history
  - Use awesomebar autocomplete to find notes by typing part of the title (or part of the content w/full-text search)
  - Power users: create notes from the awesomebar by just typing the name and hitting Enter to open full-page editor
  - Integrates naturally into activity stream
- Devtools integration as IDE
- Sync 2.0 for profile-based secure cloud backups?
- possible MDN integration into IDE
- Webmaker / Mozilla Learning / Teach the Web could use FF Notes (+ a custom plugin) as a universal toolkit for learning to code

#### Represents Mozilla mission / values 
- Promote web literacy & coding skills globally
- Democratize web publishing
- Provide a decentralized alternative to corporate social / blogging silos
- And, a browser feature that's genuinely useful for all kinds of people
