# Bar Mor — portfolio / landing page
# Static site served by nginx. No build step required.
FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="barmor-portfolio" \
      org.opencontainers.image.description="Bar Mor — Software Engineer & Automation Expert portfolio" \
      org.opencontainers.image.source="https://github.com/barmor12/barmor-portfolio"

# Container-level nginx config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Site assets
COPY index.html resume.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/  /usr/share/nginx/html/js/
COPY fonts/ /usr/share/nginx/html/fonts/

# Healthcheck hits the in-container /healthz endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

EXPOSE 80
