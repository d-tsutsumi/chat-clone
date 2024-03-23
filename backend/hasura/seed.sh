#!/bin/bash

hasura seed create chat \
 --from-table public.organization \
 --from-table public.rooms \
 --from-table public.user \
 --from-table public.user \
 --from-table public.user_join_tables_rooms \
 --from-table public.user_role \
