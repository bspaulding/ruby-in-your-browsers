tmux start-server
tmux new-session -d -s riyb -n vim
tmux new-window -t riyb:1 -n guard
tmux new-window -t riyb:2 -n httpd
tmux new-window -t riyb:3 -n shell

tmux send-keys -t riyb:0 "vim ." C-m
tmux send-keys -t riyb:1 "guard" C-m
tmux send-keys -t riyb:2 "ruby -run -e httpd . -p 3000" C-m

tmux select-window -t riyb:0
tmux attach-session -t riyb
