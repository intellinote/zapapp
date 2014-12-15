var Zap = {
    create_note_pre_write: function(bundle) {
        var body = JSON.parse(bundle.request.data);
        body.note_type = 'NOTE';
        bundle.request.data = JSON.stringify(body);
        return bundle.request;
    },
    create_task_pre_write: function(bundle) {
        var body = JSON.parse(bundle.request.data);
        body.note_type = 'TASK';
        bundle.request.data = JSON.stringify(body);
        return bundle.request;
    },
    new_user_in_workspace_post_poll: function(bundle) {
        var users = JSON.parse(bundle.response.content);
        for(var i=0;i<users.length;i++) {
            users[i].id = users[i].user_id;
            if(users[i] && users[i].family_name && users[i].given_name) {
                users[i].full_name_given_family = users[i].given_name + " " + users[i].family_name;
                users[i].full_name_family_given = users[i].family_name + ", " + users[i].given_name;
            }
        }
        return users;
    },
    new_user_in_organization_post_poll: function(bundle) {
        var users = JSON.parse(bundle.response.content);
        for(var i=0;i<users.length;i++) {
            users[i].id = users[i].user_id;
            if(users[i] && users[i].family_name && users[i].given_name) {
                users[i].full_name_given_family = users[i].given_name + " " + users[i].family_name;
                users[i].full_name_family_given = users[i].family_name + ", " + users[i].given_name;
            }
        }
        return users;
    }
};