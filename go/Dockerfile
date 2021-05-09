FROM golang:1.16.4-alpine AS builder

WORKDIR /usr/src/app

COPY main.go /usr/src/app/main.go

RUN go build main.go

#CMD [ "./main" ]

FROM scratch

COPY --from=builder /usr/src/app .
ENTRYPOINT ["./main"]