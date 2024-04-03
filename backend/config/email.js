const handleModalOpen = () => {
    // Navigate to /status when the button is clicked
    setModalOpen(true);
   
    // Kirim permintaan ke backend untuk mengirim email
    fetch('http://localhost:3001/send-email', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email: 'recipient@example.com', // Ganti dengan email penerima
         subject: 'Subject of the email',
         text: 'Body of the email',
       }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
       console.error('Error:', error);
    });
   };
   