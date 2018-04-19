---
layout: darkbg
title: Contact
share: false
active: contact
---
<div class="row">
<div class="email-info text-center">
<h1 class="display-1"><i class="fa fa-envelope"></i></h1>
</div>
<h4 class="text-center mb-5 mt-2">Feel free to drop me a line at: <a href="mailto:info@aryehkobrinsky.com" title="email me!">info@aryehkobrinsky.com</a> or by using the form below.</h4>

<form method="POST" action="http://formspree.io/aryeh.kobrinsky@gmail.com">
  <div class="form-group">
    <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp" placeholder="Enter email" name="email">
    <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else... ever...</small>
  </div>
  <input type="text" name="_gotcha" style="display:none" />
  <div class="form-group">
    <input type="text" class="form-control" id="contactSubject" placeholder="Subject" name="_subject">
  </div>
  <input type="hidden" name="_next" value="{{ site.url }}/thanks" />
  <div class="form-group">
    <textarea class="form-control" id="contactMessage" rows="5" name="message" placeholder="Your message"></textarea>
  </div>
  <button type="submit" class="btn btn-primary" id="sendMessage">Submit</button>
  </form>
</div>