using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using DiscountAggregator.AbstractTypes.Converters;
using MongoDB.Bson;

namespace TestClassLibrary
{
    [TestFixture]
    class ConvertersTests
    {
        [Test]
        public void IdCorrectValidationTest()
        {
            string testData = "5dea55adb12b743f78443323";
            ObjectId actual = testData.ToObjectId();
            ObjectId expected = ObjectId.Parse(testData);
            Assert.AreEqual(expected, actual);
        }
        [Test]
        public void IdIncorrectValidationTest1()
        {
            string testData = "5dea55adb12b743f7844332";
            Assert.That(() => testData.ToObjectId(), Throws.TypeOf<ArgumentException>());
        }
        [Test]
        public void IdIncorrectValidationTest2()
        {
            string testData = "Hello";
            Assert.That(() => testData.ToObjectId(), Throws.TypeOf<ArgumentException>());
        }

    }
}
