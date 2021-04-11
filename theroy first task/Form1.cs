using Fare;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace theroy_first_task
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            try
            {
                richTextBox1.Text = "";
                List<string> list = new List<string>();
                string x = textBox1.Text;
                Xeger xeger = new Xeger(x, new Random());
                string result = "";
                int c = 0;
                for(int i=0;i<1000||c==10;i++)
                {
                    string rand=xeger.Generate();
                    if(list.IndexOf(rand)==-1)
                    {
                        result += rand + "\n";
                        list.Add(rand);
                        c++;
                    }
                }
                richTextBox1.Text = result;
            }
            catch
            {

            }
        }

        private void richTextBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
            try
            {
                string x = textBox2.Text;
                Regex re = new Regex(textBox1.Text);
                Match match = re.Match(x);
                if(match.Success)
                {
                    label3.Visible = true;
                    label4.Visible = false ;

                }
                else
                {
                    label4.Visible = true;
                    label3.Visible = false;
                }
            }
            catch
            {

            }
        }
    }
}
