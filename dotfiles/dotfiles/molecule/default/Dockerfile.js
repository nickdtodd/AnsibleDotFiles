FROM geerlingguy/docker-ubuntu2004-ansible

ENV ANSIBLE_USER=nick
RUN set -xe \
  && groupadd -r ${ANSIBLE_USER} \
  && useradd -m -g ${ANSIBLE_USER} ${ANSIBLE_USER} \
  && sed -i "/^%${ANSIBLE_USER}/s/ALL\$/NOPASSWD:ALL/g" /etc/sudoers
