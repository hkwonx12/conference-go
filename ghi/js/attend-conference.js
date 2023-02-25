window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');

    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }
      selectTag.classList.remove('d-none');

      const load_spin = document.getElementById('loading-conference-spinner');
      load_spin.classList.add('d-none');

    }

    const formTag = document.getElementById("create-attendee-form");
    formTag.addEventListener('submit', async(event) => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));
        console.log(json);
        const locationUrl = 'http://localhost:8001/api/attendees/';
        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
        },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            formTag.classList.add('d-none');
            const success = document.getElementById('success-message');
            success.classList.remove('d-none');
            const newAttendee = await response.json();
            console.log(newAttendee);
        }
    });

  });
