FROM ubuntu:18.04
RUN apt-get -y update && apt-get install -y apache2
RUN service --status-all
RUN service apache2 start

ENTRYPOINT ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]