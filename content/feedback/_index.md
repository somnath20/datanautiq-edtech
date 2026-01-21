---
title: "Feedback"
---

<form name="feedback" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="feedback">

  <p>
    <label>Name:<br>
      <input type="text" name="name" required>
    </label>
  </p>

  <p>
    <label>Email:<br>
      <input type="email" name="email" required>
    </label>
  </p>

  <p>
    <label>Message:<br>
      <textarea name="message" required></textarea>
    </label>
  </p>

  <button type="submit">Submit</button>
</form>
