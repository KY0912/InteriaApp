<template>
  <v-app>
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="user in users"
              v-bind:key="user.id"
              class="d-flex child-flex"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card flat tile class="d-flex">
                <v-responsive>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ user.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon text v-on:click="goDetail(user.id)">
                      <v-icon color="green darken-2">mdi-arrow-right-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>ユーザーページ</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <FollowButton v-bind:user="user" />
                    <v-list-item-content>
                      <v-list-item-title>フォロー</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-responsive>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import FollowButton from "../elements/FollowButton";
import { getUsers } from "../../lib/api-service";

export default {
  name: "Users",
  components: { FollowButton },
  data: function () {
    return {
      users: [],
      followingCount: Number,
      followersCount: Number,
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      try {
        this.users = await getUsers();
        console.log(this.users);
      } catch (e) {
        this.users = [];
        console.log(e);
      }
    },
    getCount(userId) {
      const url = "/users/" + userId + "/counts";
      axios.get(url).then((response) => {
        this.followingCount = response.data.count_followings;
        this.followersCount = response.data.count_followers;
        return response.data.count_followings;
      });
    },
    goDetail(userId) {
      location.href = `/show/${userId}`;
    },
  },
};
</script>
<style>
</style>