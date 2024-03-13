#!/bin/bash

hasura seed create chat \
 --from-table tsutsumi_chat.organization \
 --from-table tsutsumi_chat.rooms \
 --from-table tsutsumi_chat.user \
 --from-table tsutsumi_chat.user \
 --from-table tsutsumi_chat.user_join_tables_rooms \
 --from-table tsutsumi_chat.user_role \
