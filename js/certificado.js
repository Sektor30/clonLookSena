        const nameInput = document.getElementById('name-input');
        const nameDisplay = document.getElementById('name-display');

        nameInput.addEventListener('input', () => {
            nameDisplay.textContent = nameInput.value || '[Nombre]';
        });

        function downloadCertificate() {
            const certificate = document.getElementById('certificate');
            html2canvas(certificate).then(canvas => {
                const link = document.createElement('a');
                link.download = 'certificado.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }