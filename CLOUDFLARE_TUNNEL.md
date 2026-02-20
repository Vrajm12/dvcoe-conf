# Cloudflare Tunnel Setup

Your conference site is now configured with Cloudflare Tunnel!

## Quick Start

### 1. Start your development server
```bash
npm run dev
```

### 2. Start the Cloudflare Tunnel (in a separate terminal)
```bash
npm run tunnel
```

This will generate a temporary public URL (e.g., `https://random-name.trycloudflare.com`) that tunnels to your local server.

## Usage

- **Quick tunnel (no login)**: `npm run tunnel` - Creates a temporary public URL
- **Login to Cloudflare**: `npm run tunnel:login` - Required for persistent tunnels

## Features

✅ Instant public URL for your local dev server
✅ HTTPS enabled automatically  
✅ No port forwarding needed
✅ Perfect for sharing with team/clients
✅ Works behind firewalls

## Creating a Persistent Tunnel (Optional)

For a persistent tunnel with a custom domain:

1. Login to Cloudflare:
   ```bash
   npm run tunnel:login
   ```

2. Create a named tunnel:
   ```bash
   cloudflared tunnel create dvcoe-conf-tunnel
   ```

3. Configure DNS in your Cloudflare dashboard

4. Run with config:
   ```bash
   cloudflared tunnel --config cloudflared-config.yml run
   ```

## Troubleshooting

- Ensure port 3000 is not blocked
- Check that `npm run dev` is running first
- For persistent tunnels, update the credentials path in `cloudflared-config.yml`

For more info: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/
