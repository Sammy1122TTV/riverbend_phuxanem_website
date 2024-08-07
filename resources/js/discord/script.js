document.addEventListener('DOMContentLoaded', () => {
    fetch('https://discord.com/api/guilds/1255926299440971796/widget.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('server-name').textContent = data.name;
            document.getElementById('member-count').textContent = `Members: ${data.members}`;
            document.getElementById('online-count').textContent = `Online: ${data.presence_count}`;
            document.getElementById('invite-link').href = data.instant_invite;
            document.getElementById('server-icon').src = `https://cdn.discordapp.com/icons/${data.id}/${data.icon}`;
        })
        .catch(error => console.error('Error fetching server data:', error));
});
